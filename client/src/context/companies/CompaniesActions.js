import axios from 'axios';
import { getLocalStorageValue } from '../../utils/localStorage';

const compaines = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getLocalStorageValue('user')
      ? `Bearer ${getLocalStorageValue('user').token}`
      : undefined,
  },
});

export const fetchCompaines = async (params) => {
  return await compaines.get(`api/v1/companies`, {
    params,
  });
};

export const createCompany = async (payload) => {
  return await compaines.post(`/api/v1/compaines`, payload);
};

export const updateCompany = async (id, payload) => {
  return await compaines.put(`/api/v1/compaines/${id}`, payload);
};
export const deleteCompany = async (id) => {
  return await compaines.delete(`/api/v1/compaines/${id}`);
};

export const getCompany = async (id) => {
  return await compaines.get(`/api/v1/compaines/${id}`);
};
