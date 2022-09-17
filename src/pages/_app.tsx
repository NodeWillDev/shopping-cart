import type { AppProps } from 'next/app'
import Head from 'next/head'
import CartProvider from '../context/CartProvider'
import GlobalStyled from '../styles/global/globalStyled'

export default function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <CartProvider>
      <Head>
        {/* FONTS */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&display=swap" rel="stylesheet" />

        <link rel="icon" type="image/png" href="images/icon/icon.png" />
        <title >Shopping Cart</title>
        
      </Head>
      <GlobalStyled />
      <Component {...pageProps} />
    </CartProvider>
  </>
}