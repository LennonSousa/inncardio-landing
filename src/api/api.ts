import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MAILINGBOSS_URL,
    timeout: 20000,
});

export default api;