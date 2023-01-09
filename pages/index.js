// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import LandingPage from '../components/LandingPage/LandingPage'
import { useSelector, useDispatch } from 'react-redux'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const token = useSelector(state => state.token.value)
  console.log(token)
  return (
    <>
      <LandingPage></LandingPage>
    </>
  )
}