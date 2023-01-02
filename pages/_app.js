import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { createContext, useState } from 'react';

export const PreviousPath = createContext()

export default function App({ Component, pageProps }) {
  const [path, setPath] = useState('')
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <PreviousPath.Provider value={{ path, setPath }}>
        <Component {...pageProps} />
        <ToastContainer />
      </PreviousPath.Provider>
    </QueryClientProvider>
  )
}

