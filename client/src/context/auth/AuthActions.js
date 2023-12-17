import axios from 'axios';

const auth = axios.create({
  url: 'http:/localhost:5000',
  // headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const login = async (payload) => {
  return await auth.post(`/api/v1/auth/login`, payload);
};

export const register = async (payload) => {
  return await auth.post(`/api/v1/auth/register`, payload);
};

export const logout = async () => {
  return await auth.get(`/api/v1/auth/register`);
};
