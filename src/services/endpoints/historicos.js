import { api } from '../api';

export const listHistoricos = async () => {
  const req = api.get('/historicos');
  return req;
};

export const showHistorico = async (id) => {
  const req = api.get(`/historicos/${id}`);
  return req;
};

export const createHistorico = async (
  competidor_id,
  pista_id,
  data_corrida,
  tempo,
) => {
  const req = await api.post('/historicos', {
    competidor_id,
    pista_id,
    data_corrida,
    tempo,
  });
  return req;
};

export const editHistorico = async (
  id,
  competidor_id,
  pista_id,
  data_corrida,
  tempo,
) => {
  const req = await api.put(`/historicos/edit/${id}`, {
    id,
    competidor_id,
    pista_id,
    data_corrida,
    tempo,
  });
  return req;
};

export const deleteHistorico = async (id) => {
  const req = await api.delete(`/historicos/edit/${id}`);
  return req;
};
