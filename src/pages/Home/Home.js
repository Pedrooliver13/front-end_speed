import React, { useEffect, useCallback, useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from '../../styles/Container';
import * as Styled from './styles';

import Competidor from '../../components/ItemCompetidor/ItemCompetidor';
import Loading from '../../components/Loading/Loading';
import Pistas from '../../components/ItemPista/ItemPista';
import Historicos from '../../components/ItemHistoricos/ItemHistoricos';

import { listUsers } from '../../services/endpoints/competidor';
import { listPistas } from '../../services/endpoints/pistas';
import { listHistoricos } from '../../services/endpoints/historicos';

const Home = () => {
  const [users, setUsers] = useState(null);
  const [pistas, setPistas] = useState(null);
  const [historicos, setHistoricos] = useState(null);

  const loadUsers = useCallback(() => {
    listUsers().then((res) => setUsers(res.data));
  }, []);

  const loadPistas = useCallback(() => {
    listPistas().then((res) => setPistas(res.data));
  }, []);

  const loadHistoricos = useCallback(() => {
    listHistoricos().then((res) => setHistoricos(res.data));
  }, []);

  useEffect(() => {
    loadUsers();
    loadPistas();
    loadHistoricos();
  }, [loadUsers, loadPistas, loadHistoricos]);

  console.log(users);

  return (
    <>
      {!users && !pistas && <Loading />}

      <Container>
        <Styled.Title>
          Competidores <Link to="/competidor/criar">Criar</Link>
        </Styled.Title>

        {users && !users.message && users.map((item) => <Competidor key={item.id} user={item} />)}

        <Styled.Title>
          Pistas <Link to="/pista/criar">Criar</Link>
        </Styled.Title>

        {pistas && !pistas.message && pistas.map((item) => <Pistas key={item.id} pista={item} />)}

        <Styled.Title>
          Históricos <Link to="/historico/criar">Criar</Link>
        </Styled.Title>

        {historicos && !historicos.message && historicos.map((item) => <Historicos key={item.id} historico={item} />)}
      </Container>
    </>
  );
};

export default Home;
