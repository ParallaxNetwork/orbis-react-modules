import {
  useContext,
  createContext,
  useState,
  ReactNode,
  ReactElement
} from 'react'
import { Orbis } from '@orbisclub/orbis-sdk'
import {
  IconHaha,
  IconDownvote,
  IconHeartFill,
  IconHeartOutline,
  IconComment,
  IconReplyto
} from '../components/Icons'
import { sleep } from '../utils'

interface IOrbisContext {
  orbis: IOrbis
  icons: IOrbisIcons
  provider: any
  profile: IOrbisProfile | null
  profileUrl: string
  hasLit: boolean
  showPoweredByOrbis: boolean
  setProvider: (provider: any) => void
  connectOrbis: () => Promise<void>
  connectLit: () => Promise<{
    status?: number
    error?: any
    result?: string
  }>
  checkOrbisConnection: (autoConnect?: boolean) => Promise<void>
  disconnectOrbis: () => void
}

interface IOrbisIcons {
  like?: ReactElement
  likeActive?: ReactElement
  haha?: ReactElement
  hahaActive?: ReactElement
  downvote?: ReactElement
  downvoteActive?: ReactElement
  replyto?: ReactElement
  replytoActive?: ReactElement
  comment?: ReactElement
}

const defaultIcons = {
  like: <IconHeartOutline />,
  likeActive: <IconHeartFill />,
  haha: <IconHaha />,
  hahaActive: <IconHaha />,
  downvote: <IconDownvote />,
  downvoteActive: <IconDownvote />,
  replyto: <IconReplyto />,
  replytoActive: <IconReplyto />,
  comment: <IconComment />
}

const OrbisContext = createContext({} as IOrbisContext)

const OrbisProvider = ({
  children,
  customIcons = null,
  options = {},
  profileUrl = 'https://app.orbis.club/profile/',
  showPoweredByOrbis = false
}: {
  children?: ReactNode
  customIcons?: IOrbisIcons | null
  options?: IOrbisConstructor
  profileUrl?: string
  showPoweredByOrbis?: boolean
}): ReactElement => {
  const orbis: IOrbis = new Orbis(options)
  const icons: IOrbisIcons = customIcons || defaultIcons
  const [provider, setProvider] = useState<any>(false)
  const [profile, setProfile] = useState<IOrbisProfile | null>(null)
  const [hasLit, setHasLit] = useState(false)

  const connectOrbis: IOrbisContext['connectOrbis'] = async () => {
    console.log('connecting', provider)
    const res = await orbis.connect_v2({
      provider,
      chain: 'ethereum'
    })

    console.log(res)

    if (res.status !== 200) {
      await sleep(2000)
      await connectOrbis()
    } else {
      const { data } = await orbis.getProfile(res.did)
      setProfile(data)
    }
  }

  const disconnectOrbis: IOrbisContext['disconnectOrbis'] = () => {
    const res = orbis.logout()

    if (res.status === 200) {
      setProfile(null)
    }
  }

  const connectLit = async () => {
    const res = await orbis.connectLit(provider)
    setHasLit(res.status === 200)
    return res
  }

  const checkOrbisConnection: IOrbisContext['checkOrbisConnection'] = async (
    autoConnect = false
  ) => {
    const res = await orbis.isConnected()

    if (res.status === 200) {
      const { data } = await orbis.getProfile(res.did)
      setHasLit(res?.details?.hasLit)
      setProfile(data)
    } else if (autoConnect) {
      await connectOrbis()
    }
  }

  return (
    <OrbisContext.Provider
      value={{
        orbis,
        icons,
        provider,
        profile,
        profileUrl,
        hasLit,
        showPoweredByOrbis,
        setProvider,
        connectOrbis,
        connectLit,
        checkOrbisConnection,
        disconnectOrbis
      }}
    >
      {children}
    </OrbisContext.Provider>
  )
}

const useOrbis = () => {
  return useContext(OrbisContext)
}

export { OrbisProvider, useOrbis }
