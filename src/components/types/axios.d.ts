import { InternalAxiosRequestConfig } from 'axios';

type CustomAxiosRequestConfig = InternalAxiosRequestConfig & {
  isMultipart?: boolean;
};

declare type SessionUser = {
  authorization?: {
    access_token: string;
  };
  token?: string;
};

declare type SessionData = {
  user?: SessionUser;
  expires?: string;
};
