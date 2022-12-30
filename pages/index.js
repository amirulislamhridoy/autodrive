// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import LandingPage from '../components/LandingPage/LandingPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <LandingPage></LandingPage>

        
    </>
  )
}