import "@styles/main.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import AppProvider from "@context/app-context";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>HandShake</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hanshake is a residenctial practise of architects "
        />
      </Head>
      <AppProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </AppProvider>
    </>
  );
}
