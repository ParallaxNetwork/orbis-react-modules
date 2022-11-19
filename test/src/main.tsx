import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import '@rainbow-me/rainbowkit/styles.css'

import { OrbisProvider } from 'orbis-react-modules'
import 'orbis-react-modules/dist/style.css'

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_KEY }),
    infuraProvider({ apiKey: import.meta.env.VITE_INFURA_KEY }),
    publicProvider()
  ]
)

const { connectors } = getDefaultWallets({
  appName: import.meta.env.VITE_APP_NAME,
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <OrbisProvider
          options={{
            PINATA_API_KEY: import.meta.env.VITE_PINATA_API_KEY,
            PINATA_SECRET_API_KEY: import.meta.env.VITE_PINATA_API_SECRET
          }}
          showPoweredByOrbis={true}
        >
          <App />
        </OrbisProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
)
