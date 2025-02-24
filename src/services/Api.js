import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import * as env from '../../env.js'; 

const $api = axios.create({
  baseURL: `${env.BACKEND_DEV}/api`,
});

const api = () => {
  const { token } = useAuth(); 

  const apiWithToken = axios.create({
    baseURL: `${env.BACKEND_DEV}/api`,
  });

  apiWithToken.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return apiWithToken;
};

export { $api, api };
