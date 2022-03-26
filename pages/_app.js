import React, { useState, useEffect } from "react";
import "@styles/main.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import AppProvider from "@context/app-context";
import Loader from "@components/Loader";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

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
        {/* <IntroContext.Provider value={[introContext, setIntroContext]}> */}
        {/* {introContext && router.asPath == "/" && <Loader />} */}

        <AnimatePresence exitBeforeEnter>
          {loading && router.asPath == "/" ? (
            <Loader setLoading={setLoading} />
          ) : (
            <Component {...pageProps} key={router.asPath} />
          )}
        </AnimatePresence>
        {/* </IntroContext.Provider> */}
      </AppProvider>
    </>
  );
}
