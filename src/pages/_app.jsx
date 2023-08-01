import '@/styles/globals.css'
import { Josefin_Sans } from 'next/font/google'

const JS = Josefin_Sans({ weight: '400',subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (<main className={JS.className}>
    <Component {...pageProps} />
      </main>
    )
}
