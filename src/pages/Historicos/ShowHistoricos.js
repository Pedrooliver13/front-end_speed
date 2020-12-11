import React, { useEffect, useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as Styled from './style';
import { Container } from '../../styles/Container';

import { showHistorico } from '../../services/endpoints/historicos';

const ShowHistorico = () => {
  const { id } = useParams();
  const [historico, setHistorico] = useState(null);

  const dataHistorico = useCallback(() => {
    showHistorico(id).then((res) => setHistorico(res.data));
  }, [id]);

  useEffect(() => {
    dataHistorico();
  }, [dataHistorico]);

  return (
    <Container>
      {historico && (
        <Styled.ShowHistorico>
          <p className="nome">
            <span>Nome:</span> {historico.nome}
          </p>
          <p>
            <span>Pista:</span> {historico.descricao}
          </p>
          <p>
            <span>data da corrida:</span> {historico.data_corrida}
          </p>
          <p>
            <span>tempo:</span> {historico.tempo}
          </p>
          <Link to={`/historico/${id}/edit`}>Editar</Link>
        </Styled.ShowHistorico>
      )}
    </Container>
  );
};

export default ShowHistorico;
