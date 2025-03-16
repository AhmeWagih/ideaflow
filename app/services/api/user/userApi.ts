import { TSignIn, TSignUp } from '@/constants/types';
import api from '@/lib/api';

export const Register = async ({ fullName, email, password }: TSignUp) => {
  const { data } = await api.post('/Account/register-Client', {
    fullName,
    email,
    password,
  });
  return data;
};

export const Login = async ({ email, password }: TSignIn) => {
  const { data } = await api.post('/Account/login', {
    email,
    password,
  });
  return data;
};

export const getUserDiagrams = async () => {
  const { data } = await api.get('/Diagram/getUserDiagrams');
  return data;
};
