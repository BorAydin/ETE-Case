import axios from 'axios';
import { getLocalStorageValue } from '../../utils/localStorage';

const auth = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getLocalStorageValue('user')
      ? `Bearer ${getLocalStorageValue('user').token}`
      : undefined,
  },
});

export const login = async (payload) => {
  return await auth.post(`/api/v1/auth/login`, payload);
};

export const register = async (payload) => {
  return await auth.post(`/api/v1/auth/register`, payload);
};

export const logout = async () => {
  return await auth.get(`/api/v1/auth/logout`);
};
