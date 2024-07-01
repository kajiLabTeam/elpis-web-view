import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Providers } from './providers.tsx'
import { Header } from './component/header.tsx'
import { Box } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Header />
      <Box pt="64px"> {/* ヘッダーの高さ分のパディングを追加 */}
        <App />
      </Box>
    </Providers>
  </React.StrictMode>,
)
