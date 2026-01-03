import { useMutation } from '@tanstack/react-query';
import { orderIn, registerIn, signIn } from '../../service/AuthService/AuthService';
export const useLogin = () => {
  return useMutation({
    mutationFn: (params: LoginProps) => signIn(params),
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (params: LoginProps) => registerIn(params),
  });
};


export const useOrder = () => {
  return useMutation({
    mutationFn: (params: LoginProps) => orderIn(params),
  });
};
