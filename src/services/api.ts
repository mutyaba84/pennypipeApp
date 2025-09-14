import axios from 'axios';

const API_BASE = process.env.API_BASE || 'https://api.pennypipe.com';

const api = axios.create({ baseURL: API_BASE, timeout: 10000 });

export default api;