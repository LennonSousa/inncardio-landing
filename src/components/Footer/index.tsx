import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { getYear } from 'date-fns';

import styles from './styles.module.css'

function Footer() {
    return (
        <footer style={{ backgroundImage: `url(/assets/images/fundo-rodape.svg)` }} className={styles.footer}>
            <Container className={styles.footerContainer}>
                <Row className={`${styles.footerRow} justify-content-center align-items-center pt-5`}>
                    <Col className="pt-5 pb-3" sm={3}>
                        <Row className="justify-content-center">
                            <Col className="col-6" sm={8}>
                                <Image fluid src="/assets/images/inncardio-logo-branca.svg" alt="Inncardio" />
                            </Col>
                        </Row>
                    </Col>

                    <Col className="pt-3 pb-3">
                        <Row className="justify-content-center align-items-center">
                            <Col sm={4} className="col-row">
                                <Row>
                                    <Col>
                                        <h5 className={styles.footerSectionTitle}>Redes sociais</h5>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <a
                                            className={styles.footerSectionText}
                                            href="https://www.instagram.com/Francisco_pitanga/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Visite o nosso Instagram"
                                        >
                                            <h6><FaInstagram size={24}
                                            /> @Francisco_pitanga</h6></a>

                                        <a
                                            className={styles.footerSectionText}
                                            href="https://www.facebook.com/profile.php?id=100071588737620"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h6><FaFacebookSquare size={24}
                                            /> Inn Cárdio</h6></a>

                                        <a
                                            className={styles.footerSectionText}
                                            href="https://api.whatsapp.com/send?phone=+55"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Nosso WhatsApp"
                                        >
                                            <h6><FaWhatsapp size={24}
                                            /> 00 91235-8789</h6></a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <section className={styles.footerBottomSection}>
                <Container>
                    <Row className="pt-3">
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
                                    <p>{`Inncardio - © ${getYear(new Date())} Todos os direitos reservados.`}</p>
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