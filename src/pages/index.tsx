import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Button, Col, Container, Image, Form, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaGrinHearts } from 'react-icons/fa';

import api from './api/api';
import WhatCards from '../components/WhatCards';
import WhoCards from '../components/WhoCards';
import { cellphone } from '../components/InputMask/masks';
import { AlertMessage, statusModal } from '../components/Interfaces/AlertMessage';

import styles from '../styles/Home.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Obrigatório!'),
  email: Yup.string().email('E-mail inválido').required('Obrigatório!'),
  phone: Yup.string().required('Obrigatório!'),
});

const Home: NextPage = () => {
  const router = useRouter();

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
        <Container className="pt-5 text-center">
          <Row className="justify-content-center align-items-center mb-4">
            <Col>
              <span>PROFISSIONAL DE EDUCAÇÃO FÍSICA</span>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center mb-5">
            <Col sm={10}>
              <h1 className={styles.title}>VÁ DE 1 A 9 MIL AO MÊS<br /> COM O PROGRAMA DE CAPACITAÇÃO</h1>
              <span>PARA TRABALHAR COM CARDIOPATAS</span>
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
                    phone: '',
                    email: '',
                  }
                }
                onSubmit={async values => {
                  setTypeMessage("waiting");
                  setMessageShow(true);

                  try {
                    await api.post('subscribe', {
                      fname: values.name,
                      phone: values.phone,
                      email: values.email,
                    });

                    setTypeMessage("success");

                    setTimeout(() => {
                      setMessageShow(false);
                      router.push('/pending');
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
                {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
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

                    <Form.Group className="mb-3" controlId="formLoginPhone">
                      <Form.Control
                        type="phone"
                        placeholder="Seu whatsapp"
                        maxLength={15}
                        onChange={(e) => {
                          setFieldValue('phone', cellphone(e.target.value));
                        }}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                          setFieldValue('phone', cellphone(e.target.value));
                        }}
                        value={values.phone}
                        name="phone"
                        isInvalid={!!errors.phone && touched.phone}
                      />
                      <Form.Control.Feedback type="invalid">{touched.phone && errors.phone}</Form.Control.Feedback>
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
                          E TRABALHAR O SEU FLUXO DE EXERCÍCIOS PERMITIDOS DENTRO DA AUTOAVALIÇÃO
                          DE CADA CLIENTE."
            />

            <WhatCards
              title="COMO OPERAR O NOSSO APLICATIVO"
              description="PARA TE LEVAR A TER MAIORES ACERTOS 
                E SE COLOCAR DE FORMA MAIS PROFISSIONAL EM SUA REGIÃO."
            />

            <WhatCards
              title="AS PARCERIAS CERTAS"
              description="PARA O SUCESSO COMO FRANQUIA QUE IRÃO TE IMPULSIONAR AO 
                MELHOR CENÁRIO DE CONSTRUÇÃO DA SUA RENDA EXTRA OU PRINCIPAL."
            />
          </Row>
        </Container>
      </section>

      <section className={`${styles.whoSection} mt-5`}>
        <Container className={styles.whoContainer}>
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>PARA QUEM É A CAPACITAÇÃO?</h2>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center mt-3">
            <WhoCards
              image="/assets/images/who-01.svg"
              description="PARA O PROFISSIONAL DE EDUCAÇÃO FÍSICA (BACHAREL OU BACHAREL/LICENCIADO) 
                QUE PRECISA DA FORÇA DE UMA BOA FRANQUIA PARA EMPREENDER."
            />

            <WhoCards
              image="/assets/images/who-03.svg"
              description="PARA O PROFISSIONAL QUE DESEJA INOVAR EM SUA REGIÃO COMO UM 
                REPRESENTANTE FRANQUEADO DA INNCARDIO."
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

          <Row className="justify-content-center align-items-center text-center mt-5">
            <Col sm={5}>
              <Row>
                <Col>
                  <h3>DR. FRANCISCO PITANGA</h3>
                  <h4>DIRETOR CIENTÍFICO DA INNCARDIO , AUTOR</h4>

                  <p>Presidente do Departamento de Educação Física em Cardiologia (DEFIC) da
                    Sociedade Brasileira de Cardiologia (SBC), regional Bahia.<br />
                    Docente permanente do Programa de Pós Graduação em Ciências da Reabilitação
                    (PPGREAB) do Instituto de Ciências da Saúde (ICS) da Universidade Federal da Bahia (UFBA).<br />
                    Doutor em Saúde Pública pelo Instituto de Saúde Coletiva (ISC) da
                    Universidade Federal da Bahia (UFBA).<br />
                    Docente colaborador do Programa de Pós Graduação em Saúde Coletiva (PPGSC) do
                    Instituto de Saúde Coletiva (ISC) da Universidade Federal da Bahia (UFBA).<br />
                    Docente colaborador do Programa de Pós Graduação em Educação Física (PPGEF) da
                    Universidade Estadual do Sudoeste da Bahia (UESB).<br />
                    Autor dos livros Epidemiologia Aplicada a Atividade Física e Testes, Medidas e
                    Avaliação em Educação Física e Esportes.</p>
                </Col>
              </Row>
            </Col>

            <Col sm={4} className="col-8">
              <Image fluid src="/assets/images/francisco-pitanga.png" alt="DR. FRANCISCO PITANGA" />
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center text-center mt-5">
            <Col sm={4} className="col-8 mb-3">
              <Image fluid src="/assets/images/cristiano.png" alt="DR. CRISTIANO PITANGA" />
            </Col>

            <Col sm={5}>
              <Row>
                <Col>
                  <h3>DR. CRISTIANO PITANGA</h3>
                  <h4>DIRETOR CIENTÍFICO DA INNCARDIO , AUTOR</h4>

                  <p>Doutor em Ciências do Esporte e Saúde (UTAD / UCB).<br />
                    Diretor Geral da Clínica CLINMATTER: Emagrecimento e Saúde da Mulher.<br />
                    Coordenador Geral da SPORTCLIN: Laboratório Baiano de Ciências do Esporte.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home;