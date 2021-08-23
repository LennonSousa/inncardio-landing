import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SUBSCRIBE_API,
    timeout: 20000,
});

export default api;