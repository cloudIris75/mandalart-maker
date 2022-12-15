import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>2023 만다라트 메이커</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
