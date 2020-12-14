import React, { useCallback, useEffect, useState } from 'react';

import { Container } from '../../styles/Container';
import { Button } from '../../components/Form/Button/Button';

import Form from '../../components/Form/Form';
import Select from '../../components/Form/Select/Select';
import Input from '../../components/Form/Input/Input';
import useForm from '../../hooks/useForm';

import { listUsers } from '../../services/endpoints/competidor';
import { listPistas } from '../../services/endpoints/pistas';
import { createHistorico } from '../../services/endpoints/historicos';
import { useHistory } from 'react-router-dom';

const CreateHistoricos = () => {
  const history = useHistory();

  const [pistas, setPistas] = useState(null);
  const [users, setUsers] = useState(null);

  const [competidorId, setCompetidorId] = useState('');
  const [pistaId, setPistaId] = useState('');
  const data = useForm('date');
  const tempo = useForm();

  const loadUsers = useCallback(() => {
    listUsers().then((res) => setUsers(res.data));
  }, []);

  const loadPistas = useCallback(() => {
    listPistas().then((res) => setPistas(res.data));
  }, []);

  useEffect(() => {
    loadUsers();
    loadPistas();
  }, [loadUsers, loadPistas]);

  function onSubmit() {
    if (
      competidorId.length &&
      pistaId.length &&
      data.validate() &&
      tempo.validate()
    ) {
      createHistorico(competidorId, pistaId, data.value, tempo.value);
      history.push('/');
    }
  }

  return (
    <Container>
      <Form title="Criar Histórico">
        <Select
          label="Competidor"
          name="competidor_id"
          value={competidorId}
          setValue={({ target }) => setCompetidorId(target.value)}
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
          options={['Interlagos', 'Baron']}
          value={pistaId}
          setValue={({ target }) => setPistaId(target.value)}

        >
          {pistas &&
            !pistas.message &&
            pistas.map((item) => (
              <option key={item.id} value={item.id}>
                {item.descricao}
              </option>
            ))}
        </Select>
        <Input label="Data da Corrida" placeholder="ex: 13/12/2000" {...data} />
        <Input label="Tempo Gasto" placeholder="ex: 40" {...tempo} />

        <Button onClick={onSubmit}>Criar</Button>
      </Form>
    </Container>
  );
};

export default CreateHistoricos;
