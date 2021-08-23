import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export type statusModal = 'waiting' | 'success' | 'warning' | 'error';

interface WaitingModalProps {
    status: statusModal,
    message?: string;
}

const AlertMessage: React.FC<WaitingModalProps> = ({ status, message = "" }) => {
    const [circleWaiting, setCircleWaiting] = useState(true);
    const [successWaiting, setSuccessWaiting] = useState(false);
    const [warningWaiting, setWarningWaiting] = useState(false);
    const [errorWaiting, setErrorWaiting] = useState(false);

    useEffect(() => {
        handleAlert(status);
    }, [status, message]);

    function handleAlert(status: statusModal) {
        if (status === 'waiting') {
            setCircleWaiting(true);
            setSuccessWaiting(false);
            setErrorWaiting(false);
            return;
        }

        if (status === 'success') {
            setCircleWaiting(false);
            setSuccessWaiting(true);
            return;
        }

        if (status === 'warning') {
            setCircleWaiting(false);
            setErrorWaiting(false);
            setWarningWaiting(true);
            return;
        }

        if (status === 'error') {
            setCircleWaiting(false);
            setSuccessWaiting(false);
            setErrorWaiting(true);
            return;
        }
    }

    return (
        <span>
            {
                circleWaiting && <><Spinner animation="border" variant="light" size="sm" /> {!!message ? message : "aguarde..."}</>
            }
            {
                successWaiting && <><FaCheckCircle /> {!!message ? message : "sucesso!"}</>
            }
            {
                warningWaiting && <><FaTimesCircle /> {!!message ? message : "aviso!"}</>
            }
            {
                errorWaiting && <><FaTimesCircle /> {!!message ? message : "algo deu errado!"}</>
            }
        </span>
    )
}

export { AlertMessage };