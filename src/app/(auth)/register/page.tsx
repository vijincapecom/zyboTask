"use client";
import LoginAuthModule from "@/components/sections/auth/AuthModule"
import { Suspense } from "react";
const Register = async () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LoginAuthModule />
            </Suspense>

        </div>
    )
}

export default Register