import '../src/styles/globals.css';
import type { AppProps } from "next/app";
import Layout from "./layout";
import createEmotionCache from "@/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}
