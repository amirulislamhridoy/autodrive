import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '../redux/store';
import axios from 'axios';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()

  axios.interceptors.request.use(function (config) {
    config.headers['authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return config
  }, function (error) {
    // console.log('error',error)
    return Promise.reject(error);
  });

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // console.log('response', response)
    return Promise.reject(error);
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  )
}

