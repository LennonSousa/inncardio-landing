import { Col, Row } from 'react-bootstrap';

import styles from './styles.module.css';

interface PageHeaderProps {
    title: string;
    description: string;
}

const WhatCards: React.FC<PageHeaderProps> = ({ title, description }) => {

    return (
        <Col md={6} lg={4} className="py-1 px-4">
            <Row>
                <Col className={styles.whatCardContainer}>
                    <Row className={`justify-content-center align-items-center ${styles.whatCardRow}`}>
                        <Col>
                            <Row>
                                <Col>
                                    <span className={styles.whatCardTitle}>{title}</span>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col>
                                    <span className={styles.whatCardDescription}>{description}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}

export default WhatCards;