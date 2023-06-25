import './../../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Open+Sans:wght@400;700&display=swap" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
