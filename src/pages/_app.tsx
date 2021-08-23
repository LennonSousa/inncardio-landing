import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo, LogoJsonLd, NextSeo, SocialProfileJsonLd } from 'next-seo';

import SEO from '../config/next-seo-config';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <DefaultSeo {...SEO} />

    <NextSeo
      canonical="https://inscricao.inncardio.com.br/"
      titleTemplate="%s | Inncardio"
      defaultTitle="App"
    />

    <LogoJsonLd
      logo="https://inscricao.inncardio.com.br/assets/images/inncardio-logo.png"
      url="https://inscricao.inncardio.com.br"
    />

    <SocialProfileJsonLd
      type="Organization"
      name="Inscrição Inncardio"
      url="https://inscricao.inncardio.com.br/"
      sameAs={[
        'https://www.instagram.com/Francisco_pitanga/',
      ]}
    />

    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Component {...pageProps} />

    <Footer />
  </>
}
export default MyApp
