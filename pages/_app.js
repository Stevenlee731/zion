import '../styles/globals.css'
import 'swiper/components/navigation/navigation.scss';
import "swiper/swiper.min.css";
import 'tailwindcss/tailwind.css'
import {

ParallaxProvider
} from "react-scroll-parallax";


function MyApp({ Component, pageProps }) {
  return <ParallaxProvider>
    <Component {...pageProps} />
  </ParallaxProvider>
}

export default MyApp
