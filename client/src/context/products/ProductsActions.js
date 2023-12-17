import axios from 'axios';
import { getLocalStorageValue } from '../../utils/localStorage';

const products = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getLocalStorageValue('user')
      ? `Bearer ${getLocalStorageValue('user').token}`
      : undefined,
  },
});

export const fetchProducts = async (params) => {
  return await products.get(`api/v1/products`, {
    params,
  });
};

export const createProduct = async (payload) => {
  return await products.post(`/api/v1/products`, payload);
};

export const updateProduct = async (id, payload) => {
  return await products.put(`/api/v1/products/${id}`, payload);
};
export const deleteProduct = async (id) => {
  return await products.delete(`/api/v1/products/${id}`);
};

export const getProduct = async (id) => {
  return await products.get(`/api/v1/products/${id}`);
};
