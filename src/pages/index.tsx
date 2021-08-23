import { useState } from 'react';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Button, Col, Container, Image, Form, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaGrinHearts } from 'react-icons/fa';

import api from './api/api';
import WhatCards from '../components/WhatCards';
import WhoCards from '../components/WhoCards';
import { AlertMessage, statusModal } from '../components/Interfaces/AlertMessage';

import styles from '../styles/Home.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Obrigatório!'),
  email: Yup.string().email('E-mail inválido').required('Obrigatório!'),
});

const Home: NextPage = () => {
  const [messageShow, setMessageShow] = useState(false);
  const [typeMessage, setTypeMessage] = useState<statusModal>("waiting");

  return (
    <>
      <NextSeo
        title="Bem-vindo(a) a página de inscrição"
        description="Profissional de educação física, como faturar de 1 a 9 mil ao mês de renda extra ou principal."
        openGraph={{
          url: 'https://inscricao.inncardio.com.br/',
          title: 'Bem-vindo(a)',
          description: 'Profissional de educação física, como faturar de 1 a 9 mil ao mês de renda extra ou principal.',
          images: [
            {
              url: 'https://inscricao.inncardio.com.br/assets/images/inncardio-logo.png',
              alt: 'Bem-vindo(a) a página de inscrição | Incárdio',
            },
            { url: 'https://inscricao.inncardio.com.br/assets/images/inncardio-logo.png' },
          ],
        }}
      />

      <section id="subscribe" className={styles.top}>
        <Container className="pt-5">
          <Row className="justify-content-center align-items-center text-center mb-3">
            <Col>
              <span>PROFISSIONAL DE EDUCAÇÃO FÍSICA</span>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center mb-3">
            <Col sm={10}>
              <h1 className={styles.title}>COMO FATURAR DE 1 A 9 MIL AO MÊS DE RENDA EXTRA OU PRINCIPAL</h1>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center">
            <Col className="mb-3" md={5}>
              <Image fluid src="/assets/images/fitness-stats.svg" alt="App Inncardio." />
            </Col>

            <Col className="mb-3" md={5}>
              <Formik
                initialValues={
                  {
                    name: '',
                    email: '',
                  }
                }
                onSubmit={async values => {
                  setTypeMessage("waiting");
                  setMessageShow(true);

                  try {
                    const res = await api.post('subscribe', {
                      name: values.name,
                      email: values.email,
                    });

                    setTypeMessage("success");

                    setTimeout(() => {
                      setMessageShow(false);
                    }, 2000);
                  }
                  catch (err) {
                    console.log('error to subscribe.');
                    console.log(err);

                    setTypeMessage("error");

                    setTimeout(() => {
                      setMessageShow(false);
                    }, 4000);
                  }
                }}
                validationSchema={validationSchema}
              >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="subscribeFormGridName">
                      <Form.Control type="text"
                        placeholder="Seu nome"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        name="name"
                        isInvalid={!!errors.name && touched.name}
                      />
                      <Form.Control.Feedback type="invalid">{touched.name && errors.name}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="subscribeFormGridEmail">
                      <Form.Control type="email"
                        placeholder="Seu e-mail"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        name="email"
                        isInvalid={!!errors.email && touched.email}
                      />
                      <Form.Control.Feedback type="invalid">{touched.email && errors.email}</Form.Control.Feedback>
                    </Form.Group>

                    <Button
                      variant="danger"
                      type="submit"
                      style={{ width: '100%' }}
                    >
                      {
                        messageShow ? <AlertMessage status={typeMessage} /> :
                          <span><FaGrinHearts /> Quero me inscrever agora</span>
                      }
                    </Button>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>

        <div style={{ backgroundImage: `url(/assets/images/shape.svg)` }} className={styles.topShape}></div>
      </section>

      <section className="mt-5">
        <Container className="py-5">
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>O QUE VOCÊ VAI ENCONTRAR?</h2>
            </Col>
          </Row>

          <Row className="align-items-center mt-3">
            <WhatCards
              title="O TREINAMENTO COMPLETO"
              description="PARA CAPTAR O CLIENTE CARDIOPATA
                          E TRABALHAR O SEU FLUXO DE EXERCICIOS PERMITIDOS DENTRO DA AUTOAVALIÇÃO
                          DE CADA CLIENTE."
            />

            <WhatCards
              title="COMO OPERAR O NOSSO APLICATIVO"
              description="PARA TE LEVAR A TER MAIORES ACERTOS 
                E SE COLOCAR DE FORMA MAIS PROFISSIONAL EM SUA REGIÃO."
            />

            <WhatCards
              title="AS PARCERIAS CERTAS"
              description="COMO FRANQUIA QUE IRÃO TE IMPULSIONAR AO 
                MELHOR CENARIO DE CONSTRUÇÃO DA SUA RENDA OU PRINCIPAL."
            />
          </Row>
        </Container>
      </section>

      <section className={`${styles.whoSection} mt-5`}>
        <Container className={styles.whoContainer}>
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>PRA QUEM É?</h2>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center mt-3">
            <WhoCards
              image="/assets/images/who-01.svg"
              description="PARA O PROFISSIONAL DE EDUCAÇÃO FISICA (BACHAREL OU BACHAREL/LICENCIADO) 
                QUE PRECISA DE FORÇA DE UMA BOA FRANQUIA PARA EMPREENDER."
            />

            <WhoCards
              image="/assets/images/who-03.svg"
              description="PARA O PROFISSIONAL QUE DESEJA INOVAR EM SUA REGIÃO COMO UM 
                REPRESENTANTE FRANQUIADO DA INNCARDIO."
            />

            <WhoCards
              image="/assets/images/who-02.svg"
              description="PARA O PROFISSIONAL DE EDUCAÇÃO FÍSICA QUE ESTÁ EM 
                FASE FINAL DA GRADUAÇÃO CURSANDO O BACHARELADO."
            />
          </Row>

          <Row className="justify-content-center text-center mt-3">
            <Col>
              <Button
                variant="outline-light"
                type="button"
                size="lg"
                className="mt-4"
                onClick={() => { window.location.href = '#subscribe'; }}
              >
                <span><FaGrinHearts /> Quero me inscrever agora</span>
              </Button>
            </Col>
          </Row>
        </Container>

        <div style={{ backgroundImage: `url(/assets/images/shape-inverted.svg)` }} className={styles.shape}></div>
      </section>

      <section style={{ backgroundImage: `url(/assets/images/about-background.svg)` }} className={styles.aboutContainer}>
        <Container>
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>SOBRE OS FUNDADORES DO PROJETO INNCARDIO</h2>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center text-center mt-3">
            <Col sm={4}>
              <Row>
                <Col>
                  <h3>DR. FRANCISCO PITANGA</h3>
                  <h4>DIRETOR CIENTIFICO DA INNCARDIO , AUTOR</h4>

                  <p>Sem perder tempo! Assim que você colocar o seu nome e email,
                    não terá mais volta, depois da verdade ser revelada, você
                    nunca mais verá o inglês do mesmo jeito. A cada semana irei
                    liberar uma estratégia e mostrarei como você poderá implementar
                    até que chegue em nosso treinamento no dia 02/08, para que você
                    esteja pronto!</p>
                </Col>
              </Row>
            </Col>

            <Col sm={5}>
              <Image fluid src="/assets/images/undraw_businessman_97x4.svg" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
