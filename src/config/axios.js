import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

const defaultAxiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: { 'Content-Type': 'application/json' },
  adapter: httpAdapter,
});

export default defaultAxiosInstance;
