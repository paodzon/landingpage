import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return <>
   <Toaster/>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
