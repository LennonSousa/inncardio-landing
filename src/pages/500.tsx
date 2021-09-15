import type { NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

import styles from '../styles/Terms.module.css';

const Terms: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Projeto InnCárdio"
        description="Profissional de educação física, como faturar de 1 a 9 mil ao mês de renda extra ou principal."
        openGraph={{
          url: 'https://inscricao.inncardio.com.br/',
          title: 'Projeto InnCárdio',
          description: 'Profissional de educação física, como faturar de 1 a 9 mil ao mês de renda extra ou principal.',
          images: [
            {
              url: 'https://inscricao.inncardio.com.br/assets/images/inncardio-logo.png',
              alt: 'Projeto InnCárdio | Incárdio',
            },
            { url: 'https://inscricao.inncardio.com.br/assets/images/inncardio-logo.png' },
          ],
        }}
      />

      <section id="subscribe" className={styles.top}>
        <Container className="pt-5">
          <Row className="justify-content-center align-items-center text-center mb-3">
            <Col>
              <h1 className={styles.title}>Erro inesperado!</h1>
            </Col>
          </Row>
        </Container>

        <div style={{ backgroundImage: `url(/assets/images/shape.svg)` }} className={styles.topShape}></div>
      </section>

      <article>
        <Container>
          <Row className="mb-3 text-center">
            <Col className={styles.sectionTitle}>
              <p>Ocorreu um erro inesperado no servidor, talvez seja necessário tentar novamente
                mais tarde.</p>
            </Col>
          </Row>

          <Row className="mb-3 text-center">
            <Col>
              <Link href='/'>
                <a>
                  Clique aqui para voltar à página inicial <FaArrowRight size={18} />
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </article>
    </>
  )
}

export default Terms;
