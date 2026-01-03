'use client';

import { Suspense } from "react";
import LoginAuthModule from "@/components/sections/auth/AuthModule";

const LoginIn = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginAuthModule />
    </Suspense>
  );
};

export default LoginIn;
