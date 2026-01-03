
'use client';

import { initClientAuth } from '@/lib/initialClientAuth';
import { useEffect } from 'react';


export default function ClientCall() {
  useEffect(() => {
    initClientAuth();
  }, []);

  return null;
}
