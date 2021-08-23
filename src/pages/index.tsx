import type { NextPage } from 'next'
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Button, Col, Container, Image, Form, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaGrinHearts } from 'react-icons/fa';

import api from '../api/api';
import WhatCards from '../components/WhatCards';

import styles from '../styles/Home.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Obrigatório!'),
  email: Yup.string().email('E-mail inválido').required('Obrigatório!'),
});

const Home: NextPage = () => {
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
              url: 'https://inscricao.inncardio.com.br/assets/images/logo-bioma.jpg',
              alt: 'Bem-vindo(a) a página de inscrição | Incárdio',
            },
            { url: 'https://inscricao.inncardio.com.br/assets/images/logo-bioma.jpg' },
          ],
        }}
      />

      <div>
        <section className={styles.top} style={{ backgroundImage: `url(/assets/images/fundo-topo.svg)` }}>
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
                    //setTypeMessage("waiting");
                    //setMessageShow(true);

                    try {
                      await api.post('integration/webhook/613378:dd5390e5b7d4c87731429ddf1ff91221/01', {
                        name: values.name,
                        email: values.email,
                      });

                      //setTypeMessage("success");

                      setTimeout(() => {
                        //setMessageShow(false);/
                      }, 2000);
                    }
                    catch (err) {
                      console.log('error create doc.');
                      console.log(err);

                      //setTypeMessage("error");

                      setTimeout(() => {
                        //setMessageShow(false);
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
                        <span><FaGrinHearts /> Quero me inscrever agora</span>
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="mt-5">
          <Container>
            <Row>
              <Col>
                <h2 className={styles.sectionTitle}>O que você vai encontrar?</h2>
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

      </div>
    </>
  )
}

export default Home
