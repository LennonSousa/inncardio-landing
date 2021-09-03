import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Col, Container, Image, Row } from 'react-bootstrap';

import WhatCards from '../../components/WhatCards';

import styles from './styles.module.css';

const Home: NextPage = () => {
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
                  <span>NOSSAS BOAS-VINDAS</span>
                </Col>
              </Row>

              <Row className="justify-content-center align-items-center mb-3">
                <Col>
                  <h1 className={styles.title}>ao Projeto InnCardio</h1>
                </Col>
              </Row>
            </Col>

            <Col className="mb-3" md={5}>
              <Image fluid src="/assets/images/fitness-stats.svg" alt="Confirme a sua inscrição." />
            </Col>
          </Row>
        </Container>

        <div style={{ backgroundImage: `url(/assets/images/shape.svg)` }} className={styles.topShape}></div>
      </section>

      <section className="mt-2">
        <Container className="py-5">
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>CONFIRME A SUA INSCRIÇÃO</h2>
            </Col>
          </Row>

          <Row className="align-items-center mt-3">
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

export default Home
