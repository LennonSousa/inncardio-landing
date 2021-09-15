import type { NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';

import styles from '../styles/Terms.module.css';

const Terms: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Termos e privacidade"
        description="Profissional de educação física, como faturar de 1 a 9 mil ao mês de renda extra ou principal."
        openGraph={{
          url: 'https://inscricao.inncardio.com.br/',
          title: 'Termos e privacidade',
          description: 'Profissional de educação física, como faturar de 1 a 9 mil ao mês de renda extra ou principal.',
          images: [
            {
              url: 'https://inscricao.inncardio.com.br/assets/images/inncardio-logo.png',
              alt: 'Termos e privacidade | Incárdio',
            },
            { url: 'https://inscricao.inncardio.com.br/assets/images/inncardio-logo.png' },
          ],
        }}
      />

      <section id="subscribe" className={styles.top}>
        <Container className="pt-5">
          <Row className="justify-content-center align-items-center text-center mb-3">
            <Col>
              <h1 className={styles.title}>Termos de uso e Notificação de Privacidade</h1>
            </Col>
          </Row>

          <Row className="mb-3 text-light text-center">
            <Col>
              <Link href='/'>
                <a>
                  <FaArrowLeft size={18} /> voltar à página inicial
                </a>
              </Link>
            </Col>
          </Row>
        </Container>

        <div style={{ backgroundImage: `url(/assets/images/shape.svg)` }} className={styles.topShape}></div>
      </section>

      <article>
        <Container>
          <Row className="mt-5">
            <Col>
              <h1 className={styles.sectionTitle}>Termos de uso.</h1>
            </Col>
          </Row>

          <Row className="mt-3 mb-5">
            <Col className="article-text">
              <p>
                Ao acessar o nosso site você ESTÁ DE ACORDO COM AS CONDIÇÕES E
                TERMOS. A recusa em aceitar esses termos impedirá que você use o formulário de contato.
              </p>

              <p><strong>SERVIÇOS OFERECIDOS</strong></p>

              <p>
                Este TERMO se aplica para regular o uso do nosso site como ferramenta de contato entre Empresa e Usuário.
                Reunindo dados de contato fornecidos pelo usuário ao preencher o formulário de inscrição disponibilizado
                na página de inicial do site. Para que assim possamos retornar o contato e confirmarmos a sua inscrição.
              </p>

              <p><strong>DADOS</strong></p>

              <p>
                Ao ultilizar o nosso site para entrar em contato com a nossa equipe, o usuário fornece os seguintes dados:
                Nome, telefone e e-mail.
                Não nos responsabilizamos por envio de dados incorretos por parte do usuário.
              </p>

              <p>
                <strong>OBRIGAÇÕES DO USUÁRIO</strong>
              </p>

              <p>
                Fornecer informações de contato totalmente
                verídicas e exatas, responsabilizando-se exclusiva e integralmente (em todas as áreas jurídicas)
                por todo o conteúdo por si informado no item DADOS.
              </p>

              <p><strong>OBRIGAÇÕES DO WEBSITE</strong></p>

              <p>
                Disponibilizar um meio seguro de contato com seus usuários para participarem do projeto InnCardio.
              </p>

              <p>
                Proteger, por meio de armazenamento em servidores ou quaisquer outros meios magnéticos de alta
                segurança, a confidencialidade de todas as informações fornecidas.
              </p>

              <p><strong>MODIFICAÇÕES DESTE TERMPO</strong></p>

              <p>
                O presente TERMO DE USO pode a qualquer tempo, ter seu conteúdo, ou parte dele, modificados
                para adequações e inserções, tudo com vistas ao aprimoramento dos serviços
                disponibilizados.
              </p>

              <p><strong>CANAL DE COMUNICAÇÃO</strong></p>

              <p>
                No rodapé do site você pode encontrar informações para nos contatar.
              </p>

              <p><strong>ACEITAÇÃO DO TERMO DE USO</strong></p>

              <p>
                O USUÁRIO declara ter lido, entendido e que aceita todas as regras, condições e
                obrigações estabelecidas no presente TERMO.
              </p>
            </Col>
          </Row>


          <Row className="mt-5">
            <Col>
              <h1 className={styles.sectionTitle}>Declaração de Privacidade.</h1>
            </Col>
          </Row>

          <Row className="mt-3 mb-5">
            <Col className="article-text">
              <ul>
                <li>
                  <a href="#1">A quem essa Declaração se aplica?</a>
                </li>
                <li>
                  <a href="#2">Quem é o responsável pelo tratamento dos dados pessoais?</a>
                </li>
                <li>
                  <a href="#3">Quais dados são coletados?</a>
                </li>
                <li>
                  <a href="#4">Como utilizamos esses dados?</a>
                </li>
                <li>
                  <a href="#5">Como utilizamos cookies e outras tecnologias?</a>
                </li>
                <li>
                  <a href="#6">Como os dados são armazenados?</a>
                </li>
                <li>
                  <a href="#7">O estabelecimento transfere os dados para outros países?</a>
                </li>
                <li>
                  <a href="#8">Como os dados são compartilhados?</a>
                </li>
                <li>
                  <a href="#9">Como protegemos seus dados?</a>
                </li>
                <li>
                  <a href="#10">Como iremos notificá-lo em caso de mudanças nesta Declaração?</a>
                </li>
                <li>
                  <a href="#11">Como exercer seus direitos enquanto titular de dados pessoais?</a>
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="mt-5 mb-5">
            <Col className="article-text">
              <p>
                <a id="1">
                  <strong>1. A quem essa Declaração se aplica?</strong>
                </a>

              </p>

              <p>
                Se aplica àqueles que acessarem o nosso site.
              </p>

              <p>
                <a id="2"><strong>2. Quem controla o tratamento dos dados pessoais?</strong></a>

              </p>

              <p>
                A pessoa física ou jurídica que decide sobre o tratamento de dados pessoais. Ao acessar os nossos
                serviços, exercemos o papel de controlador do tratamento de seus dados pessoais, conforme a
                legislação aplicável e descrito na presente Declaração.
              </p>

              <p>
                <a id="3"><strong>3. Quais dados são coletados?</strong></a>

              </p>

              <p>
                3.1 Dados que você nos fornece
                Ao se cadastrar para participar do projeto InnCardio, poderemos obter algumas informações sobre
                você, tais como:
              </p>

              <p>
                3.1.1 Dados de contato

              </p>

              <p>
                Esses dados incluem seu nome, telefone e e-mail.
              </p>

              <p>
                <a id="4"><strong>4. Como utilizamos esses dados?</strong></a>
              </p>

              <p>

                4.1 Para retornar o seu contato, confirmação de inscrição e alertas sobre o projeto InnCardio.
                Podemos utilizar os dados coletados para prover uma forma eficiente de contato com você
                e para a realização do projeto InnCardio. Lembrando que quem entra em contato primeiro é você.
              </p>

              <p>
                <a id="5"><strong>5. Como utilizamos cookies e outras tecnologias?</strong></a>
              </p>

              <p>
                Usamos de tecnologias como cookies tanto em dispositivos móveis ou não.
                Essas tecnologias nos ajudam a personalizar a sua experiência.
              </p>

              <p>
                <a id="6"><strong>6. Como os dados são armazenados?</strong></a>
              </p>

              <p>
                6.1 Onde os dados são armazenados?
              </p>

              <p>
                Os seus dados de contato listados acima são armazenados em
                servidores de e-mail parceiros localizados no Brasil, EUA e Europa.
              </p>

              <p>
                6.2 Por quanto tempo os dados são armazenados?
                Durante o período necessário para as finalidades apresentadas nos Termos e Condições
                de uso, respeitando o período de retenção de dados determinado pela
                legislação aplicável.
              </p>

              <p>
                <a id="7" ><strong>7. Transferimos os dados para outros países?</strong></a>

              </p>

              <p>
                Não. Seus dados ficam armazenados somente em nosso servidores em países listados acima.
              </p>

              <p>
                <a id="8" ><strong>8. Meus dados são compartilhados?</strong></a>

              </p>

              <p>
                Sim, compartilhamos os seus dados com empresas parceiras fornecedoras de servidores de envio de e-mails
                para entrarmos em contato com você via e-mail.
              </p>

              <p>
                <a id="9" ><strong>9. Como protegemos seus dados?</strong></a>

              </p>

              <p>
                Utilizamos os princípios estipulados por lei, respeitando a sua privacidade e protegendo seus dados em
                nossos processos internos como um todo.
              </p>

              <p>
                <a id="10" ><strong>10. Como iremos notificá-lo em caso de mudanças à essa Declaração?</strong></a>

              </p>

              <p>
                Se fizermos alguma alteração na Declaração em termos materiais, colocaremos um aviso
                no nosso Website juntamente com a Declaraçao Privacidade atualizada.
              </p>
            </Col>
          </Row>
        </Container>
      </article>
    </>
  )
}

export default Terms;
