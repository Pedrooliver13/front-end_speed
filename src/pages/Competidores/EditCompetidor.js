import React, { useEffect, useCallback, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import * as Styled from './style';
import { Button, ButtonRed, Group } from '../../components/Form/Button/Button';
import { Container } from '../../styles/Container';

import Form from '../../components/Form/Form';
import Input from '../../components/Form/Input/Input';
import Loading from '../../components/Loading/Loading';

import {
  showUser,
  editUser,
  deleteUser,
} from '../../services/endpoints/competidor';
// import useForm from '../../hooks/useForm';

const EditCompetidor = () => {
  const history = useHistory();
  const { id } = useParams();
  const [infoUser, setInfoUser] = useState([]);

  const changeValue = ({ target }, field) => {
    setInfoUser({
      ...infoUser,
      [field]: target.value,
    });
  };

  const onSubmit = () => {
    const keys = Object.keys(infoUser);

    for (let key of keys) {
      if (infoUser[key] === '') {
        return alert('Por favor, preencha todos os campos');
      }
    }

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

  const onDelete = (event) => {
    const confirmation = window.confirm('Deseja deletar?');

    if (!confirmation) {
      event.preventDefault();
    }

    if (confirmation) {
      deleteUser(id).then((res) => console.log(res));
      history.push('/');
    }
  };

  const dataUser = useCallback(() => {
    showUser(id).then((res) => setInfoUser(res.data));
  }, [id]);

  useEffect(() => {
    dataUser();
  }, [dataUser]);

  return (
    <Container>
      {!infoUser && <Loading />}

      {infoUser && infoUser.id && (
        <Form title="Editar Competidor">
          <Input
            type="text"
            name="nome"
            label="Nome"
            defaultValue={infoUser.nome}
            onBlur={(e) => changeValue(e, 'nome')}
          />
          <Input
            type="number"
            name="temperatura"
            label="Temperatura"
            defaultValue={infoUser.temperatura}
            onBlur={(e) => changeValue(e, 'temperatura')}
          />
          <Input
            type="number"
            name="peso"
            label="Peso"
            defaultValue={infoUser.peso}
            onBlur={(e) => changeValue(e, 'peso')}
          />
          <Input
            type="text"
            name="altura"
            label="Altura"
            defaultValue={infoUser.altura}
            onBlur={(e) => changeValue(e, 'altura')}
          />

          <div>
            <Styled.Label>
              <input
                name="sexo"
                type="radio"
                value="M"
                checked={infoUser.sexo === 'M'}
                onChange={(e) => changeValue(e, 'sexo')}
              />
              Masculino
            </Styled.Label>
            <Styled.Label>
              <input
                name="sexo"
                type="radio"
                value="F"
                checked={infoUser.sexo === 'F'}
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
      )}
    </Container>
  );
};

export default EditCompetidor;
