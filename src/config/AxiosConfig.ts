// axiosConfig.ts
import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/auth.config';

// ------------------
// Token cache (client)
// ------------------
let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};



export const clearAccessToken = () => {
  accessToken = null;
};

// ------------------
// Base config
// ------------------
const BASE_CONFIGURATION = {
  baseURL: process.env.BASE_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
};

export const clientAxios: AxiosInstance = axios.create(BASE_CONFIGURATION);

clientAxios.interceptors.request.use(
  (config) => {
    if (accessToken) {
 
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

clientAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error)
);


export const serverAxios: AxiosInstance = axios.create(BASE_CONFIGURATION);

serverAxios.interceptors.request.use(async (config) => {
  const session = await getServerSession(authOptions);
  const token = session?.user?.accessToken;

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

serverAxios.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => Promise.reject(error)
);
