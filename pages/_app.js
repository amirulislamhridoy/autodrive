import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <ToastContainer />
  </QueryClientProvider>)
}
