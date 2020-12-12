import React, { useEffect, useState, useCallback } from 'react';
import * as Styled from './style';

import ItemHistorico from '../../components/ItemHistoricos/ItemHistoricos';
import { listHistoricos } from '../../services/endpoints/historicos';

import { Link } from 'react-router-dom';
import { Container } from '../../styles/Container';

const Historicos = () => {
  const [historicos, setHistoricos] = useState(null);

  const loadHistoricos = useCallback(() => {
    listHistoricos().then((res) => setHistoricos(res.data));
  }, []);

  useEffect(() => {
    loadHistoricos();
  }, [loadHistoricos]);

  return (
    <Container>
      <Styled.Title>
        Históricos <Link to="/historico/criar">Criar</Link>
      </Styled.Title>

      {historicos &&
        !historicos.message &&
        historicos.map((item) => (
          <ItemHistorico key={item.id} historico={item} />
        ))}
    </Container>
  );
};

export default Historicos;
