import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '../app/store';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
  const router = useRouter()

  axios.interceptors.request.use(function (config) {
    config.headers['authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return config
  }, function (error) {
    return Promise.reject(error);
  });
  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.response.status === 401 || error.response.status === 404){
      router.push('/login')
      localStorage.removeItem('token')
      signOut(auth);
    }
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

