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
  deleteHistorico
} from '../../services/endpoints/historicos';
import useForm from '../../hooks/useForm';
import { useHistory, useParams } from 'react-router-dom';

const CreateHistoricos = () => {
  const history = useHistory();
  const { id } = useParams();

  const [pistas, setPistas] = useState(null);
  const [users, setUsers] = useState(null);
  const [infoHistorico, setInfoHistorico] = useState([]);

  const [competidorId, setCompetidorId] = useState('');
  const [pistaId, setPistaId] = useState('');
  const date = useForm('date');
  const tempo = useForm();

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
    if (target.value === '') return;

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
      competidorId.length &&
      pistaId.length &&
      date.validate() &&
      tempo.validate()
    ) {
      editHistorico(id, competidorId, pistaId, date.value, tempo.value);
      history.push('/');
    }
  }

  function onDelete() {
    deleteHistorico(id);
    history.push('/');
  }

  return (
    <Container>
      <Form title="Editar Histórico">
        <Select
          label="Competidor"
          name="competidor_id"
          value={competidorId}
          setValue={setCompetidorId}
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
          value={pistaId}
          setValue={setPistaId}
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
          label="Data da Corrida"
          placeholder={infoHistorico && infoHistorico.data_corrida}
          {...date}
        />
        <Input
          label="Tempo Gasto"
          placeholder={infoHistorico && infoHistorico.tempo}
          {...tempo}
        />

        <Group>
          <ButtonRed onClick={onDelete}>Remover</ButtonRed>
          <Button onClick={onSubmit}>Atualizar</Button>
        </Group>
      </Form>
    </Container>
  );
};

export default CreateHistoricos;
