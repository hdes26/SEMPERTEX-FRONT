import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;


const username = process.env.NEXT_PUBLIC_API_URL_USER;
const password = process.env.NEXT_PUBLIC_API_URL_PASSWORD; 

const basicAuth = Buffer.from(`${username}:${password}`).toString('base64');


const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${basicAuth}`
    },
});

export default apiClient;
