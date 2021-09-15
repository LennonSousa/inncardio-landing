import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { FaWhatsapp, FaYoutube } from 'react-icons/fa';

import WhatCards from '../../components/WhatCards';

import styles from './styles.module.css';

const Pending: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Confirme a sua inscrição"
        description="Profissional de educação física, como faturar de 1 a 9 mil ao mês de renda extra ou principal."
        openGraph={{
          url: 'https://inscricao.inncardio.com.br/',
          title: 'Confirme a sua inscrição',
          description: 'Profissional de educação física, como faturar de 1 a 9 mil ao mês de renda extra ou principal.',
          images: [
            {
              url: 'https://inscricao.inncardio.com.br/assets/images/inncardio-logo.png',
              alt: 'Confirme a sua inscrição | Incárdio',
            },
            { url: 'https://inscricao.inncardio.com.br/assets/images/inncardio-logo.png' },
          ],
        }}
      />

      <section id="subscribe" className={styles.top}>
        <Container className="pt-5">
          <Row className="justify-content-center align-items-center text-center mb-3">
            <Col>
              <Row className="justify-content-center align-items-center text-center mb-3">
                <Col>
                  <span>PARABÉNS!</span>
                </Col>
              </Row>

              <Row className="justify-content-center align-items-center mb-3">
                <Col>
                  <h1 className={styles.title}>AGORA FALTA UM PASSO PARA TER A SUA OPORTUNIDADE!</h1>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-center text-center align-items-center mt-4">
            <Col sm={6}>
              <video
                style={
                  {
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '5px'
                  }
                }
                preload="auto"
                controls
                title="Nossas Boas-vindas ao projeto"
              >
                <source src="/assets/videos/pending-video.mp4" type="video/mp4" />
              </video>
            </Col>

            <Col>
              <h3 className={styles.titleHighlight}><FaYoutube size={40} /><br />VEJA O VIDEO RÁPIDO DO DR. FRANCISCO PITANGA - DIRETOR CIENTÍFICO InnCARDIO</h3>
            </Col>
          </Row>

          <Row className="justify-content-center text-center align-items-center mt-3">
            <Col>
              <Button
                variant="success"
                type="button"
                size="lg"
                className="mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://chat.whatsapp.com/JyHuzdrqKScDfCDWQ1QrSz', '_blank', 'noopener,noreferrer');
                }}
              >
                <span><FaWhatsapp /> ENTRAR NO GRUPO VIP DE OPORTUNIDADES</span>
              </Button>
            </Col>
          </Row>
        </Container>

        <div style={{ backgroundImage: `url(/assets/images/shape.svg)` }} className={styles.topShape}></div>
      </section>

      <section>
        <Container className="py-5">
          <Row className="align-items-center">
            <WhatCards
              title="TE ENVIAMOS UM E-MAIL"
              description="ACESSE A SUA CAIXA DE ENTRADA OU PODE SER QUE ESTEJA
              NA CAIXA DE SPAN/LIXO ELETRÔNICO TAMBÉM."
            />

            <WhatCards
              title="CONFIRME A SUA INSCRIÇÃO"
              description="NA MENSAGEM QUE TE ENVIAMOS, CONTÉM TODAS AS
              INSTRUÇÕES E O LINK PARA VOCÊ CONFIRMAR A SUA INSCRIÇÃO."
            />

            <WhatCards
              title="TUDO CERTO"
              description="APÓS CONFIRMAR O SEU INTERESSE PARA SABER MAIS
              SOBRE O NOSSO MODELO DE FRANQUIAS, VOCÊ TERÁ ACESSO AO
              MATERIAL."
            />
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Pending;
