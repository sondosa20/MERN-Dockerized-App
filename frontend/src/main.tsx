import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { client } from './client/sdk.gen.ts'

const queryClient = new QueryClient()
client.setConfig({
  // set default base url for requests
  baseURL: 'http://localhost:5000/',
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
  
)
