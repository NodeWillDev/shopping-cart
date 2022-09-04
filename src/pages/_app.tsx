import type { AppProps } from 'next/app'
import GlobalStyled from '../../styles/global/globalStyled'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyled />
    <Component {...pageProps} />
  </>
}