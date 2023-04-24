import { APP_CONFIG } from '@constants/config';
import axios, { AxiosRequestConfig } from 'axios';
import { getToken } from './auth.service';

const axiosInstance = axios.create({
  baseURL: APP_CONFIG.BASE_API_URL,
  timeout: 15000,
});

axiosInstance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = await getToken();
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;
});

export default axiosInstance;
