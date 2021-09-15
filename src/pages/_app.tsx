import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { CorporateContactJsonLd, DefaultSeo, LogoJsonLd, NextSeo, SocialProfileJsonLd } from 'next-seo';
import { Button, Card, Row, Col } from 'react-bootstrap';
import Cookies from 'js-cookie';

import SEO from '../config/next-seo-config';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [isAcceptedTerms, setIsAcceptedTerms] = useState(true);

  useEffect(() => {
    if (!Cookies.get('clinica-gerar-terms')) {
      setIsAcceptedTerms(false);
    }
  }, []);

  function handleAcceptTerms() {
    Cookies.set('clinica-gerar-terms', 'accepted', {
      expires: 365,
    });

    setIsAcceptedTerms(true);
  }

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

    <CorporateContactJsonLd
      url="https://inscricao.inncardio.com.br/"
      logo="https://inscricao.inncardio.com.br/assets/images/inncardio-logo.png"
      contactPoint={[
        {
          telephone: '+55-99-99109-1718',
          contactType: 'reservations',
          contactOption: 'TollFree',
          areaServed: ['BR'],
          availableLanguage: ['Portuguese'],
        },
      ]}
    />

    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <Component {...pageProps} />

    {
      !isAcceptedTerms && <div
        aria-live="polite"
        aria-atomic="true"
        className="terms-card"
      >
        <Card>
          <Card.Header className="text-danger"><strong>Termos de uso</strong></Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <Card.Text>
                  Ao continuar no site, você aceita os
                  <Link href='/terms' >
                    <a className="text-danger"><strong> termos de uso e políticas de privacidade.</strong></a>
                  </Link>
                </Card.Text>
              </Col>
              <Col sm={2}>
                <Button
                  variant="danger"
                  type="button"
                  onClick={handleAcceptTerms}
                >
                  Aceitar
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    }

    <Footer />
  </>
}
export default MyApp
