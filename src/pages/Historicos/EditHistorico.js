import React, { useState, useEffect, useCallback } from 'react';

import { Container } from '../../styles/Container';
import { Button, ButtonRed, Group } from '../../components/Form/Button/Button';

import Form from '../../components/Form/Form';
import Select from '../../components/Form/Select/Select';
import Input from '../../components/Form/Input/Input';

import { listUsers } from '../../services/endpoints/competidor';
import { listPistas } from '../../services/endpoints/pistas';
import {
  editHistorico,
  showHistorico,
  deleteHistorico,
} from '../../services/endpoints/historicos';
import { useHistory, useParams } from 'react-router-dom';

const CreateHistoricos = () => {
  const history = useHistory();
  const { id } = useParams();

  const [pistas, setPistas] = useState(null);
  const [users, setUsers] = useState(null);
  const [infoHistorico, setInfoHistorico] = useState([]);

  const loadUsers = useCallback(() => {
    listUsers().then((res) => setUsers(res.data));
  }, []);

  const loadPistas = useCallback(() => {
    listPistas().then((res) => setPistas(res.data));
  }, []);

  const dataHistorico = useCallback(() => {
    showHistorico(id).then((res) => setInfoHistorico(res.data));
  }, [id]);

  const changeValue = ({ target }, field) => {
    if (target.value === '')
      return alert('Por favor, preencha todos os campos');

    setInfoHistorico({
      ...infoHistorico,
      [field]: target.value,
    });
  };

  useEffect(() => {
    loadUsers();
    loadPistas();
    dataHistorico();
  }, [loadUsers, loadPistas, dataHistorico]);

  function onSubmit() {
    if (
      infoHistorico.competidor_id !== '' &&
      infoHistorico.pista_id !== '' &&
      infoHistorico.data_corrida &&
      infoHistorico.tempo
    ) {
      editHistorico(
        id,
        infoHistorico.competidor_id,
        infoHistorico.pista_id,
        infoHistorico.data_corrida,
        infoHistorico.tempo,
      );
      history.push('/');
    }
  }

  const onDelete = (event) => {
    const confirmation = window.confirm('Deseja deletar?');

    if (!confirmation) {
      event.preventDefault();
    }

    if (confirmation) {
      deleteHistorico(id).then((res) => console.log(res));
      history.push('/');
    }
  };

  return (
    <Container>
      {infoHistorico && infoHistorico.id && (
        <Form title="Editar Histórico">
          <Select
            label="Competidor"
            name="competidor_id"
            defaultValue={infoHistorico.competidor_id}
            onBlur={(e) => changeValue(e, 'competidor_id')}
          >
            {users &&
              !users.message &&
              users.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nome}
                </option>
              ))}
          </Select>
          <Select
            label="Pistas"
            name="pista_id"
            defaultValue={infoHistorico.pista_id}
            onBlur={(e) => changeValue(e, 'pista_id')}
          >
            {pistas &&
              !pistas.message &&
              pistas.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.descricao}
                </option>
              ))}
          </Select>
          <Input
            type="text"
            label="Data da Corrida"
            defaultValue={infoHistorico.data_corrida}
            onBlur={(e) => changeValue(e, 'data_corrida')}
          />
          <Input
            type="number"
            label="Tempo Gasto"
            defaultValue={infoHistorico.tempo}
            onBlur={(e) => changeValue(e, 'tempo')}
          />

          <Group>
            <ButtonRed onClick={onDelete}>Remover</ButtonRed>
            <Button onClick={onSubmit}>Atualizar</Button>
          </Group>
        </Form>
      )}
    </Container>
  );
};

export default CreateHistoricos;
