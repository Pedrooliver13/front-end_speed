import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Button, ButtonRed, Group } from '../../components/Form/Button/Button';
import { Container } from '../../styles/Container';

import Form from '../../components/Form/Form';
import TextArea from '../../components/Form/TextArea/TextArea';

import {
  showPista,
  editPista,
  deletePista,
} from '../../services/endpoints/pistas';

const CreatePistas = () => {
  const { id } = useParams();
  const history = useHistory();
  const [infoPista, setInfoPista] = useState([]);

  const changeValue = ({ target }, field) => {
    if (target.value === '')
      return alert('Por favor, preencha todos os campos');

    setInfoPista({
      ...setInfoPista,
      [field]: target.value,
    });
  };

  const dataPista = useCallback(() => {
    showPista(id).then((res) => setInfoPista(res.data));
  }, [id]);

  useEffect(() => {
    dataPista();
  }, [dataPista]);

  function onSubmit() {
    if (infoPista.descricao !== '') {
      editPista(id, infoPista.descricao);
      history.push('/');
    }
  }

  const onDelete = (event) => {
    const confirmation = window.confirm('Deseja deletar?');

    
    if (!confirmation) {
      event.preventDefault();
    }

    if (confirmation) {
      deletePista(id).then((res) => console.log(res));
      history.push('/');
    }
  };

  return (
    <Container>
      <Form title="Editar Pista">
        <TextArea
          label="Descrição"
          name="descricao"
          defaultValue={infoPista.descricao}
          onBlur={(e) => changeValue(e, 'descricao')}
        />
        <Group>
          <ButtonRed onClick={onDelete}>Remover</ButtonRed>
          <Button onClick={onSubmit}>Atualizar</Button>
        </Group>
      </Form>
    </Container>
  );
};

export default CreatePistas;
