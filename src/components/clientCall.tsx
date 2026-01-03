
'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { clearAccessToken, setAccessToken } from '@/config/AxiosConfig';

export default function ClientCall() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.accessToken) {
      setAccessToken(session.user.accessToken);
    }

    if (session?.user?.accessToken === null) {
      clearAccessToken();
    }
  }, [session]);

  return null;
}

