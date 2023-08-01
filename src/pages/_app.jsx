import "@/styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Head from "next/head";

const JS = Josefin_Sans({ weight: "400", subsets: ["latin"] });
export default function App({ Component, pageProps }) {
  return (
    <main className={JS.className}>
      <Head>
        <title>BinaryCraft</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
