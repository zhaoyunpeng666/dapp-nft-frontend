import { SERVER_CONFIG } from '@/constants/config';
import ApiClient from './ApiClient';
import axios from 'axios';

const etchClient = new ApiClient(
  axios.create({
    baseURL: SERVER_CONFIG.BASE_URL, // localStorage.getItem('request_url') || '/'
    responseType: 'json' as const,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10 * 1000,
  }),
);

etchClient.client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    config.headers['session_id'] = token ? `${token}` : '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

etchClient.client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if ([401].includes(error.response.status)) {
      localStorage.removeItem('token');
      return;
    }
    return Promise.reject(error);
  },
);

export default etchClient;
