import React, { useEffect, useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as Styled from './style';
import { Container } from '../../styles/Container';

import { showPista } from '../../services/endpoints/pistas';

const ShowPista = () => {
  const { id } = useParams();
  const [pista, setPista] = useState(null);

  const dataPista = useCallback(() => {
    showPista(id).then((res) => setPista(res.data));
  }, [id]);

  useEffect(() => {
    dataPista();
  }, [dataPista]);

  console.log(pista);

  return (
    <Container>
      {pista && (
        <Styled.ShowPista>
          <p className="nome">
            <span>Descrição:</span> {pista.descricao}
          </p>
          <Link to={`/pista/${id}/edit`}>Editar</Link>
        </Styled.ShowPista>
      )}
    </Container>
  );
};

export default ShowPista;
