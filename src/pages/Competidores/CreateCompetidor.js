import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './style';

import { Button } from '../../components/Form/Button/Button';
import { Container } from '../../styles/Container';

import useForm from '../../hooks/useForm';
import Form from '../../components/Form/Form';
import Input from '../../components/Form/Input/Input';

import { createUser } from '../../services/endpoints/competidor';

const CreateCompetidores = () => {
  const nome = useForm();
  const temperatura = useForm();
  const peso = useForm();
  const altura = useForm();
  const [sexo, setSexo] = useState('M');

  let history = useHistory();

  function onSubmit() {
    if (
      nome.validate() &&
      temperatura.validate() &&
      peso.validate() &&
      altura.validate()
    ) {
      createUser(
        nome.value,
        sexo,
        temperatura.value,
        peso.value,
        altura.value,
      )

      history.push('/');
    }
  }

  return (
    <Container>
      <Form title="Criar Competidor">
        <Input type="text" name="nome" label="Nome" {...nome} />
        <Input
          type="number"
          name="temperatura"
          label="Temperatura"
          {...temperatura}
        />
        <Input type="number" name="peso" label="Peso" {...peso} />
        <Input type="text" name="altura" label="Altura" {...altura} />
        <div>
          <Styled.Label>
            <input
              name="sexo"
              type="radio"
              checked
              value="M"
              onChange={({ target }) => setSexo(target.value)}
            />
            Masculino
          </Styled.Label>
          <Styled.Label>
            <input
              name="sexo"
              type="radio"
              value="F"
              onChange={({ target }) => setSexo(target.value)}
            />
            Feminino
          </Styled.Label>
        </div>
        <Button onClick={onSubmit}>Criar</Button>
      </Form>
    </Container>
  );
};

export default CreateCompetidores;
