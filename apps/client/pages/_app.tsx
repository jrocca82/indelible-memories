import "@total-typescript/ts-reset";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@indeliblememories/ui";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import { NextSeo } from 'next-seo';
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Head>
      <title>Indelible Memories</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Analytics />
    <NextSeo
      title="Indelible Memories"
      description="Legacy worth preserving"

    />
    {/* @ts-ignore */}
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
