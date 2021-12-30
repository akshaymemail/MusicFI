import Layout from '../components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script
        src="https://kit.fontawesome.com/05a1109ff0.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
    </Layout>
  )
}

export default MyApp
