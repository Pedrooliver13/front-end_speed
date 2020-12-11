import React from 'react';

import { Button } from '../../components/Form/Button/Button';
import { Container } from '../../styles/Container';

import Form from '../../components/Form/Form';
import TextArea from '../../components/Form/TextArea/TextArea';
import useForm from '../../hooks/useForm';

import { createPista} from '../../services/endpoints/pistas';
import { useHistory } from 'react-router-dom';

const CreatePistas = () => {
  const history = useHistory();
  const descricao = useForm();

  function onSubmit() {
    if(descricao.validate()) {
      createPista(descricao.value)
      history.push('/');
    }
  }

  return (
    <Container>
      <Form title="Criar Pista">
        <TextArea label="Descrição" name="descricao" {...descricao} />
        <Button onClick={onSubmit}>Criar</Button>
      </Form>
    </Container>
  );
};

export default CreatePistas;
