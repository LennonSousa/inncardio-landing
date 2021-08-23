import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Navbar, Nav, Row, Col, Modal, Button, Image } from 'react-bootstrap';
import { FaPhoneAlt, FaWhatsapp, FaRegCalendarAlt } from 'react-icons/fa';

import styles from '../styles/components/PageHeader.module.css';

interface PageHeaderProps {
    activeLink?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ activeLink }) => {
    const [show, setShow] = useState(true);

    const [showModalSchedule, setShowModalSchedule] = useState(false);

    const handleClose = () => setShowModalSchedule(false);
    const handleShow = () => setShowModalSchedule(true);

    const navbarControl = () => {
        if (window.scrollY > 300) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', navbarControl);
        return () => window.removeEventListener('scroll', navbarControl);
    }, []);

    return (
        <>
            <Navbar className={styles.navContainerTop} variant="dark" expand="lg">
                <Container className={styles.navTopContainer}>
                    <Link href="/">
                        <Navbar.Brand>
                            <img
                                src="/assets/images/logo-horizontal-branco.svg"
                                height="40"
                                className="d-inline-block align-top"
                                alt="Clínica Gerar Imperatriz"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col className={styles.navContactContainerLink}>
                                            <Nav.Link
                                                title="Telefone da Clínica Gerar Imperatriz"
                                            ><FaPhoneAlt size={24} /> {` `} 99 3072-9525</Nav.Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className={styles.navContactContainerText}>
                                            Clínica Gerar
                                        </Col>
                                    </Row>
                                </Col>

                                <Col>
                                    <Row>
                                        <Col className={styles.navContactContainerLink}>
                                            <Nav.Link
                                                href="https://api.whatsapp.com/send?phone=+5599991091718"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                title="Marcar com Dr. Evaldo Reis Silva"
                                            ><FaWhatsapp size={24} /> {` `} 99 99109-1718</Nav.Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className={styles.navContactContainerText}>
                                            Dr. Evaldo Reis Silva
                                        </Col>
                                    </Row>
                                </Col>

                                <Col>
                                    <Row>
                                        <Col className={styles.navContactContainerLink}>
                                            <Nav.Link
                                                href="https://api.whatsapp.com/send?phone=+5599988090998"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                title="Marcar com Dra. Cristina Célia"
                                            ><FaWhatsapp size={24} /> {` `} 99 98809-0998</Nav.Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className={styles.navContactContainerText}>
                                            Dra. Cristina Célia
                                        </Col>
                                    </Row>
                                </Col>

                                <Col>
                                    <Row>
                                        <Col className={styles.navContactContainerLink}>
                                            <Nav.Link onClick={handleShow} ><FaRegCalendarAlt size={24} /> {` `} Horário de atendimento</Nav.Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar collapseOnSelect className={styles.navContainerBottom}
                style={{
                    backgroundColor: show ? 'rgba(0, 58, 60, 1)' : 'rgba(0, 58, 60, 0.8)',
                    boxShadow: show ? 'none' : 'rgb(0 0 0 / 31%) 0px 4px 11px 2px'
                }}
                variant="dark"
                expand="lg"
                sticky="top"
            >
                <Container>
                    <Link href="/">
                        <Navbar.Brand href="/" className={styles.navBrandBottom} style={{ top: show ? "-100%" : 10 }}>
                            <img
                                style={{ opacity: show ? 0 : 1 }}
                                src="/assets/images/logo-horizontal-branco.svg"
                                height="30"
                                className="align-top"
                                alt="Clínica Gerar Imperatriz"
                            />
                        </Navbar.Brand>
                    </Link>

                    <div className={styles.navBottomContainer}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>

                    <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                        <Nav>
                            <Link passHref href="/">
                                <Nav.Link
                                    className={`nav-link ${activeLink === "/" ? styles.navHeaderLinkActive : styles.navHeaderLink}`}
                                    title="A Clínica"
                                    data-title="A Clínica">INÍCIO</Nav.Link>
                            </Link>
                            <Link passHref href="/about">
                                <Nav.Link
                                    className={`nav-link ${activeLink === "/about" ? styles.navHeaderLinkActive : styles.navHeaderLink}`}
                                    title="Sobre nós"
                                    data-title="Sobre nós">SOBRE NÓS</Nav.Link>
                            </Link>
                            <Link passHref href="/our-services">
                                <Nav.Link
                                    className={`nav-link ${activeLink === "/our-services" ? styles.navHeaderLinkActive : styles.navHeaderLink}`}
                                    title="Nossos serviços"
                                    data-title="Nossos Serviços">NOSSOS SERVIÇOS</Nav.Link>
                            </Link>
                            <Link passHref href="/contact">
                                <Nav.Link
                                    className={`nav-link ${activeLink === "/contact" ? styles.navHeaderLinkActive : styles.navHeaderLink}`}
                                    title="Contato"
                                    data-title="Contato">CONTATO</Nav.Link>
                            </Link>

                            <div className={styles.navBottomLinksContainer}>
                                <Row>
                                    <Col className="mt-3" sm={3}>
                                        <Row>
                                            <Col className={styles.navContactContainerLink}>
                                                <Nav.Link
                                                    title="Telefone da Clínica Gerar Imperatriz"
                                                >
                                                    <FaPhoneAlt size={24} /> {` `} 99 3072-9525
                                                </Nav.Link>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className={styles.navContactContainerText}>
                                                Clínica Gerar
                                        </Col>
                                        </Row>
                                    </Col>

                                    <Col className="mt-3" sm={3}>
                                        <Row>
                                            <Col className={styles.navContactContainerLink}>
                                                <Nav.Link
                                                    href="https://api.whatsapp.com/send?phone=+5599991091718"
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                >
                                                    <FaWhatsapp size={24} /> {` `} 99 99109-1718
                                                </Nav.Link>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className={styles.navContactContainerText}>
                                                Dr. Evaldo Reis Silva
                                        </Col>
                                        </Row>
                                    </Col>

                                    <Col className="mt-3" sm={3}>
                                        <Row>
                                            <Col className={styles.navContactContainerLink}>
                                                <Nav.Link
                                                    href="https://api.whatsapp.com/send?phone=+5599988090998"
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                >
                                                    <FaWhatsapp size={24} /> {` `} 99 98809-0998
                                                </Nav.Link>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className={styles.navContactContainerText}>
                                                Dra. Cristina Célia Andrade
                                        </Col>
                                        </Row>
                                    </Col>

                                    <Col className="mt-3" sm={3}>
                                        <Row>
                                            <Col className={styles.navContactContainerLink}>
                                                <Nav.Link
                                                    onClick={handleShow}
                                                >
                                                    <FaRegCalendarAlt size={24} /> {` `} Horário de atendimento
                                                </Nav.Link>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showModalSchedule} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title style={{ color: "#003A3C", fontWeight: 600 }}>Nossos horários de funcionamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mt-4 mb-4 justify-content-center align-items-center text-center">
                        <Col className="col-8" sm={6}>
                            <Image fluid src="/assets/images/undraw_Work_time_re_hdyv.svg" alt="Horário de funcionamento" />
                        </Col>

                        <Col className="mt-5" sm={5}>
                            <Row className="mb-2">
                                <Col>
                                    <h5 style={{ color: "#003A3C", fontWeight: 600 }}>De segunda a sexta.</h5>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <h6>Das 08h às 12h</h6>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <h6>e das 14h às 18h.</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" title="Fechar" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PageHeader;