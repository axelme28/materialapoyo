import { request } from './config';

export const login = async (data) => {
  return await request('/login', 'POST', data);
};

export const register = async (data) => {
  return await request('/register', 'POST', data);
};

export const createCart = async (data) => {
  return await request('/cart', 'POST', data);
};

export const getCart = async (id) => {
  return await request(`/cart/${id}`, 'GET');
};

export const deleteCart = async (id) => {
  return await request(`/cart/${id}`, 'DELETE');
};
