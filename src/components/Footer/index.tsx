import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

import styles from './styles.module.css'

function Footer() {
    return (
        <footer style={{ backgroundImage: `url(/assets/images/footer-background.svg)` }}>
            <Container className={styles.footerContainer}>
                <Row className="footerRow justify-content-center align-items-center pt-5">
                    <Col className="pt-5 pb-3" sm={3}>
                        <Row className="justify-content-center">
                            <Col className="col-6" sm={8}>
                                <Image fluid src="/assets/images/logo-horizontal-branco.svg" alt="Logomarca Clínica Gerar" />
                            </Col>
                        </Row>
                    </Col>

                    <Col className="pt-3 pb-3" sm={3}>
                        <Row>
                            <Col>
                                <h5 className={styles.footerSectionTitle}>Redes sociais</h5>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <a
                                    className={styles.footerSectionText}
                                    href="https://www.instagram.com/clinicagerar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Visite o nosso Instagram"
                                >
                                    <h6><FaInstagram size={24}
                                    /> @clinicagerar</h6></a>

                                <a
                                    className={styles.footerSectionText}
                                    href="https://www.instagram.com/clinicagerar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h6><FaFacebookSquare size={24}
                                    /> Clinica Gerar Imperatriz</h6></a>

                                <a
                                    className={styles.footerSectionText}
                                    href="https://api.whatsapp.com/send?phone=+5599991091718"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Nosso WhatsApp"
                                >
                                    <h6><FaWhatsapp size={24}
                                    /> 99 98798-4898</h6></a>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="pt-3 pb-3" sm={3}>
                        <Row>
                            <Col>
                                <Link href="/our-services">
                                    <a title="Nossos Serviços">
                                        <h5 className={styles.footerSectionTitle}>Serviços</h5>
                                    </a>
                                </Link>

                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className={styles.footerSectionText}><h6>Ginecologia</h6></div>
                                <div className={styles.footerSectionText}><h6>Obstetrícia</h6></div>
                                <div className={styles.footerSectionText}><h6>Ultrassonografia</h6></div>
                                <div className={styles.footerSectionText}><h6>Medicina fetal</h6></div>
                                <div className={styles.footerSectionText}><h6>Cirurgia plástica</h6></div>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="pt-3 pb-3" sm={3}>
                        <Row>
                            <Col>
                                <h5 className={styles.footerSectionTitle}>Endereço</h5>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className={styles.footerSectionText}><h6>Av. Bernardo Sayão, 3650</h6></div>
                                <div className={styles.footerSectionText}><h6>Medical Center, 5º andar</h6></div>
                                <div className={styles.footerSectionText}><h6>Bairro Três Poderes</h6></div>
                                <div className={styles.footerSectionText}><h6>Imperatriz - MA</h6></div>
                                <div className={styles.footerSectionText}><h6>65903-075</h6></div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <section className={styles.footerBottomSection}>
                <Container>
                    <Row className="pt-2">
                        <Col>
                            <Row className="justify-content-center">
                                <Col sm={2}>
                                    <Link href="/terms">
                                        <a title="Termos de uso" className={styles.footerBottomLink}><p>Termos de uso</p></a>
                                    </Link>
                                </Col>

                                <Col sm={2}>
                                    <Link href="/terms">
                                        <a title="Políticas de privacidade" className={styles.footerBottomLink}><p>Notificação de privacidade</p></a>
                                    </Link>
                                </Col>
                            </Row>

                            <Row>
                                <Col className={styles.footerBottomText}>
                                    <p>Clínica Gerar Imperatriz - © 2021 Todos os direitos reservados.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </footer>
    );
}

export default Footer;