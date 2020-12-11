import { api } from '../api';

export const listUsers = async () => {
  const req = await api.get('/users');
  return req;
}

export const showUser = async (id) => {
  const req = await api.get(`/users/${id}`);
  return req;
}

export const createUser = async (nome, sexo, temperatura, peso, altura) => {
  const req = await api.post(`/users`, {
    nome,
    sexo,
    temperatura,
    peso,
    altura
  });
  return req;
}


export const editUser = async (id, nome, sexo, temperatura, peso, altura) => {
  const req = await api.put(`/users/edit/${id}`, {
    nome: nome,
    sexo: sexo,
    temperatura: temperatura,
    peso: peso,
    altura: altura
  });
  return req;
}


export const deleteUser = async (id) => {
  const req = await api.delete(`/users/edit/${id}`);
  return req;
}