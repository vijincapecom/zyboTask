
'use client';

import { clearAccessToken, setAccessToken } from '@/config/AxiosConfig';
import { getSession } from 'next-auth/react';


export const initClientAuth = async () => {
  const session = await getSession();
  console.log(session)
  if (session?.user?.accessToken) {
    setAccessToken(session.user.accessToken);
  } else {
    clearAccessToken();
  }
};
