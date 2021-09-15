import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { FaGift, FaWhatsapp } from 'react-icons/fa';

import WhatCards from '../../components/WhatCards';

import styles from './styles.module.css';

const Confirmed: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Inscrição confirmada"
        description="Profissional de educação física, como faturar de 1 a 9 mil ao mês de renda extra ou principal."
        openGraph={{
          url: 'https://inscricao.inncardio.com.br/',
          title: 'Inscrição confirmada',
          description: 'Profissional de educação física, como faturar de 1 a 9 mil ao mês de renda extra ou principal.',
          images: [
            {
              url: 'https://inscricao.inncardio.com.br/assets/images/inncardio-logo.png',
              alt: 'Inscrição confirmada | Incárdio',
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
                  <h1 className={styles.title}>Seu interesse está confirmado em nossa base!</h1>
                </Col>
              </Row>
            </Col>

            <Col className="mb-3" md={5}>
              <Image fluid src="/assets/images/fitness-stats.svg" alt="Inscrição confirmada." />
            </Col>
          </Row>
        </Container>

        <div style={{ backgroundImage: `url(/assets/images/shape.svg)` }} className={styles.topShape}></div>
      </section>

      <section className="mt-2">
        <Container className="py-5">
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>APROVEITE A PRÉVIA DA OPORTUNIDADE InnCardio EXLCUSIVA!</h2>
            </Col>
          </Row>

          <Row className="justify-content-center text-center align-items-center mt-3">
            <Col sm={6} className="col-10 mt-5">
              <span className={styles.titleHighlight}>GRUPO VIP NO WHATSAPP</span>
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
                <span><FaWhatsapp /> ENTRAR NO GRUPO DE OPORTUNIDADES</span>
              </Button>
            </Col>

            <Col sm={6} className="col-10 mt-5">
              <span className={styles.titleHighlight}>RESPONDA A PESQUISA</span>
              <Button
                variant="danger"
                type="button"
                size="lg"
                className="mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://bit.ly/SOBREVOC%C3%8AP0010021', '_blank', 'noopener,noreferrer');
                }}
              >
                <span><FaGift /> E GARANTA UM BÔNUS EXCLUSIVO</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Confirmed;
