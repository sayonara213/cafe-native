import { APP_CONFIG } from '@constants/config';
import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: APP_CONFIG.BASE_API_URL,
  timeout: 15000,
});

axiosInstance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  return config;
});

export default axiosInstance;
