import { Col, Image, Row } from 'react-bootstrap';

import styles from './styles.module.css';

interface WhoCardsProps {
    image: string;
    description: string;
}

const WhoCards: React.FC<WhoCardsProps> = ({ image, description }) => {

    return (
        <Col md={6} lg={4} className="py-1 px-4">
            <Row>
                <Col className={styles.whoCardContainer}>
                    <Row className={`justify-content-center align-items-center ${styles.whoCardRow}`}>
                        <Col>
                            <Row className="justify-content-center align-items-center mt-2">
                                <Col sm={8}>
                                    <Image fluid src={image} alt={description} />
                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col>
                                    <span className={styles.whoCardDescription}>{description}</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}

export default WhoCards;