import React, { useEffect, useCallback, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import * as Styled from './style';
import { Button, ButtonRed, Group } from '../../components/Form/Button/Button';
import { Container } from '../../styles/Container';

import Form from '../../components/Form/Form';
import Input from '../../components/Form/Input/Input';

import { showUser, editUser, deleteUser } from '../../services/endpoints/competidor';

const EditCompetidor = () => {
  const history = useHistory();
  const { id } = useParams();
  const [infoUser, setInfoUser] = useState([]);

  // campos reativos
  const [nome, setNome] = useState('');
  const [temperatura, setTemperatura] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const changeValue = ({ target }, field) => {
    if (target.value === '') return;

    setInfoUser({
      ...infoUser,
      [field]: target.value,
    });
  };

  const onSubmit = () => {
    editUser(
      id,
      infoUser.nome,
      infoUser.sexo,
      infoUser.temperatura,
      infoUser.peso,
      infoUser.altura,
    ).then((res) => console.log(res));

    history.push('/');
  };

  const onDelete = () => {
    deleteUser(id).then(res => console.log(res))
    history.push('/');
  }

  const dataUser = useCallback(() => {
    showUser(id).then((res) => setInfoUser(res.data));
  }, [id]);

  useEffect(() => {
    dataUser();
  }, [dataUser]);

  return (
    <Container>
      <Form title="Editar Competidor">
        <Input
          type="text"
          name="nome"
          label="Nome"
          placeholder={infoUser && infoUser.nome}
          value={nome}
          onChange={({target}) => setNome(target.value)}
          onBlur={(e) => changeValue(e, 'nome')}
        />
        <Input
          type="number"
          name="temperatura"
          label="Temperatura"
          placeholder={infoUser && infoUser.temperatura}
          value={temperatura}
          onChange={({target}) => setTemperatura(target.value)}
          onBlur={(e) => changeValue(e, 'temperatura')}
        />
        <Input
          type="number"
          name="peso"
          label="Peso"
          placeholder={infoUser && infoUser.peso}
          value={peso}
          onChange={({target}) => setPeso(target.value)}
          onBlur={(e) => changeValue(e, 'peso')}
        />
        <Input
          type="text"
          name="altura"
          label="Altura"
          placeholder={infoUser && infoUser.altura}
          value={altura}
          onChange={({target}) => setAltura(target.value)}
          onBlur={(e) => changeValue(e, 'altura')}
        />

        <div>
          <Styled.Label>
            <input
              name="sexo"
              type="radio"
              value="M"
              checked={infoUser && infoUser.sexo === 'M'}
              onChange={(e) => changeValue(e, 'sexo')}
            />
            Masculino
          </Styled.Label>
          <Styled.Label>
            <input
              name="sexo"
              type="radio"
              value="F"
              checked={infoUser && infoUser.sexo === 'F'}
              onChange={(e) => changeValue(e, 'sexo')}
            />
            Feminino
          </Styled.Label>
        </div>

        <Group>
          <ButtonRed onClick={onDelete}>Remover</ButtonRed>
          <Button onClick={onSubmit}>Atualizar</Button>
        </Group>
      </Form>
    </Container>
  );
};

export default EditCompetidor;
