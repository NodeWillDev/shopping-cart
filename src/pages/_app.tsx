import type { AppProps } from 'next/app'
import CartProvider from '../context/CartProvider'
import GlobalStyled from '../styles/global/globalStyled'

export default function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <CartProvider>
      <GlobalStyled />
      <Component {...pageProps} />
    </CartProvider>
  </>
}