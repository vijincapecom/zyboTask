import { clientAxios } from "@/config/AxiosConfig";

export const signIn = async (params: LoginProps) => {
  const { data } = await clientAxios.post( `/api/verify/`, params);
  return data;
};

 export const registerIn = async (params: LoginProps) => {
   const { data } = await clientAxios.post(`/api/login-register/`, params);
   return data;
 };

  export const orderIn = async (params: LoginProps) => {
   const { data } = await clientAxios.post(`/api/purchase-product/`, params);
   return data;
 };

