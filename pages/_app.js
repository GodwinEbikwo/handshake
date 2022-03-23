import "@styles/main.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}
