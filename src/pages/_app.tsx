import { AppProps } from 'next/app';
import '@/styles/globals.css';
import { MainLayout } from '../layouts/MainLayout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Best Price</title>
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
