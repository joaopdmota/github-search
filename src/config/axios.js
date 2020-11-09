import axios from 'axios';

const defaultAxiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: { 'Content-Type': 'application/json' },
});

export default defaultAxiosInstance;
