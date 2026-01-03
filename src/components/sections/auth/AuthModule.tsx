"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import { signIn } from "next-auth/react";

import FormWrapper from "@/components/form/FormWrapper";
import FormPhoneInput from "@/components/form/FormPhoneInput";
import FormInput from "@/components/form/FormInput";
import ButtonWidget from "@/components/widgets/ButtonWidget";

import { banner } from "@/components/helpers/imageHelper";
import { NameLoginForm, PhoneloginFormSchema } from "@/lib/validation";
import { useLogin, useRegister } from "@/components/store/hooks/AuthHook/AuthHook";
import { success } from "zod";
import { showErrorToasts, showSuccessToast } from "@/lib/toasts";


const LoginAuthModule = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isRegisterPage = pathname === "/register";
  const phoneFromLogin = searchParams.get("phone");

  const { mutateAsync: login , isPending: loginPending} = useLogin();
  const { mutateAsync: register, isPending: registerPending } = useRegister();

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      phone_number: "",
      name: "",
    },
    resolver: zodResolver(isRegisterPage? NameLoginForm : PhoneloginFormSchema),
  });

const onsubmit = async (data: LoginProps) => {
  try {
    if (isRegisterPage) {
      const response = await register({
        name: data.name,
        phone_number: phoneFromLogin ?? data.phone_number,
      });

      if (response?.token?.access) {
        const signInResult = await signIn("login", {
          redirect: false,
          accessToken: response.token.access,
          user: String(response.user),
          otp: response.otp,
        });

        if (!signInResult?.error) {
          router.push("/product-page");
        }
      }

      return;
    }

    const response = await login({
      phone_number: data.phone_number,
    });
    if (response?.user === false) {
      router.push(`/register?phone=${data.phone_number}`);
      return;
    }

    if (response?.token?.access) {
      const signInResult = await signIn("login", {
        redirect: false,
        accessToken: response.token.access,
        user: String(response.user),
        otp: response.otp,
      });

      if (!signInResult?.error) {
        router.push("/product-page");
      }
    }
    showSuccessToast(response?.message);
  } catch (error) {
    showErrorToasts(error);
    
  }
};

  return (
    <div className="container-full">
      <main className="flex flex-col lg:flex-row bg-black h-screen">
        <div className="lg:w-1/2 relative lg:h-screen overflow-hidden">
          <Image
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="lg:w-1/2 flex items-center justify-center px-4 sm:px-12 py-8">
          <div className="w-full max-w-md">
            <h1 className="text-white text-[22px] text-center font-semibold mb-8">
              {isRegisterPage ? "Welcome, You are?" : "Log In"}
            </h1>

            <FormWrapper onSubmit={handleSubmit(onsubmit)}>
              <div className="space-y-2">
              {isRegisterPage && (
                <FormInput
                  control={control}
                  name="name"
                  label="Name"
                  placeholder="Enter name"
                  className="bg-white/10 border border-white/10 text-white"
                />
              )}

            {!isRegisterPage && (
              <FormPhoneInput
                control={control}
                name="phone_number"
                label="Phone"
                placeholder="Enter phone"
                readOnly={isRegisterPage} 
                className="bg-white/10 border border-white/10 text-white"
              />
            )}
             </div>
              <div className="mt-10">
                <ButtonWidget
                  type="submit"
                  isLoading={isRegisterPage ? registerPending : loginPending}
                  className="bg-white hover:bg-white w-full text-black hover:text-black py-2 rounded-md font-medium"
                >
                  {"Continue"}
                </ButtonWidget>
              </div>
            </FormWrapper>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginAuthModule;
