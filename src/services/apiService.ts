import axios from 'axios';

const API_URL = 'http://localhost:14001';


const username = 'sempertex';
const password = 'sempertex';

const basicAuth = Buffer.from(`${username}:${password}`).toString('base64');


const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${basicAuth}`
    },
});

export default apiClient;
