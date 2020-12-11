import { api } from '../api';

export const listPistas = async () => {
  const req = await api.get('/pistas');
  return req;
};

export const showPista = async (id) => {
  const req = await api.get(`/pistas/${id}`);
  return req;
}

export const createPista = async (descricao) => {
  const req = await api.post('/pistas', { descricao });
  return req;
};

export const editPista = async (id, descricao) => {
  const req = await api.put(`pistas/edit/${id}`, {
    id,
    descricao
  });
  return req;
}

export const deletePista = async (id) => {
  const req = await api.delete(`/pistas/edit/${id}`);
  return req;
}
