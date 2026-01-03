"use client";

import FormPhoneInput from "@/components/form/FormPhoneInput";
import FormWrapper from "@/components/form/FormWrapper";
import { banner } from "@/components/helpers/imageHelper";
import { zodResolver } from '@hookform/resolvers/zod';
import ButtonWidget from "@/components/widgets/ButtonWidget";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { PhoneloginFormSchema } from "@/lib/validation";
import { useLogin } from "@/components/store/hooks/AuthHook/AuthHook";
import { useRouter } from 'nextjs-toploader/app';
import { signIn } from "next-auth/react";

const RegisterAuthModule = () => {
    const router = useRouter();
    const { control, handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            phone_number: '',
        },
        resolver: zodResolver(PhoneloginFormSchema),
    });

    const { mutateAsync: login, isPending: loginPending } = useLogin();

    const onsubmit = async (data: LoginProps) => {
        try {
            const response = await login(data);

            if (response?.user === false) {
                router.push('/register');
                return;
            }

            if (response?.user === true && response?.token?.access) {
                await signIn('credentials', {
                    accessToken: response.token.access,
                    user: response.user,
                    otp: response.otp,
                    redirect: false,
                    // callbackUrl: '/',
                });
            }


        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container-full'>
            <main className="flex flex-col lg:flex-row bg-gray-white h-screen">
                <div className="lg:w-1/2 relative lg:h-screen lg:overflow-hidden bg-black">
                    <Image src={banner} alt="Basketballplayershooting" className="w-full h-full object-cover opacity-60" />
                </div>

                <div className="lg:w-1/2 flex items-center justify-center px-4 sm:px-12 py-8 lg:py-0 bg-black">
                    <div className="w-full">
                        <h1 className="text-white text-[20px] sm:text-[22px] text-center font-semibold mb-8 sm:mb-10">Log In</h1>
                        <FormWrapper onSubmit={handleSubmit(onsubmit)}>
                            <FormPhoneInput
                                control={control}
                                star={true}
                                name='phone_number'
                                mainClassName='border border-grey-color-3'
                                label={"Phone"}
                                placeholder={"Enter Phone"}
                                errorClassName='absolute -bottom-5'
                                className='bg-[#FFFFFF]/10 border border-[#FFFFFF]/10 !text-white'
                            />
                            <div className="flex justify-center mt-10 w-full">
                                <ButtonWidget type='submit' className='bg-white w-full text-black text-center py-1 lg:px-4 lg:py-2 hover:bg-white hover:text-black rounded-md text-[14px] font-medium '>
                                    {'Continue'}
                                </ButtonWidget>
                            </div>
                        </FormWrapper>
                    </div>
                </div>

            </main>
        </div>
    )
};

export default RegisterAuthModule;