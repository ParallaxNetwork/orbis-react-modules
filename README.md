# Orbis React Modules

> Decentralized social modules created with the Orbis SDK

## Install

Coming soon

## Usage

You need to import `OrbisProvider` somewhere on your React app. This is an example on main React app file:

```tsx
...
import App from './App'
import { OrbisProvider } from 'orbis-react-modules'
...

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OrbisProvider
      options={{
        PINATA_API_KEY: process.env.MY_PINATA_API_KEY,
        PINATA_SECRET_API_KEY: process.env.MY_PINATA_API_SECRET
      }}
      showPoweredByOrbis={true}
     >
      <App />
    </OrbisProvider>
  </React.StrictMode>
)
```

After that you can import `useOrbis` and `Comments` module anywhere on your React app.

```tsx
import { useOrbis, Comments } from 'orbis-react-modules'

export default function App() {
  // Orbis context full list
  const {
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
  } = useOrbis()
  
  return (
    <Comments
      context={context}
      postboxPlaceholder="Share your comment here..."
    />
  )
}
```

## Live Demo

You can see the live demo [here](https://orbis-react-modules-test.vercel.app/)
