import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import * as Styled from './style';
import { Button, ButtonRed, Group } from '../../components/Form/Button/Button';
import { Container } from '../../styles/Container';

import Form from '../../components/Form/Form';
import TextArea from '../../components/Form/TextArea/TextArea';

import { showPista, editPista, deletePista } from '../../services/endpoints/pistas';

const CreatePistas = () => {
  const { id } = useParams();
  const history = useHistory();

  const [infoPista, setInfoPista] = useState([]);
  const [descricao, setDescricao] = useState('');

  const changeValue = ({ target }, field) => {
    if (target.value === '') return;

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
    editPista(id, infoPista.descricao);
    history.push('/');
  }

  function onDelete() {
    deletePista(id)
    history.push('/');
  }

  return (
    <Container>
      <Styled.ShowPista>
        <p className="nome">
          <span>Descrição atual:</span> {infoPista.descricao}
        </p>
      </Styled.ShowPista>

      <Form title="Editar Pista">
        <TextArea
          label="Descrição"
          name="descricao"
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          onBlur={(e) => changeValue(e, "descricao")}
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
