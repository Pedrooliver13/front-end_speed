import React, { useEffect, useCallback, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import * as Styled from './style';
import { Container } from '../../styles/Container';

import { showUser } from "../../services/endpoints/competidor";


const ShowCompetidor = () => {
  const {id} = useParams();
  const [user, setUser] = useState(null);

  const dataUser = useCallback(() => {
    showUser(id).then(res => setUser(res.data));
  },[id]);

  useEffect(() => {
    dataUser();
  }, [dataUser]);

  return (
    <Container>
        {user &&
          <Styled.ShowUser> 
            <p className="nome">
              <span>Nome:</span> {user.nome}
            </p>
            <p>
              <span>Sexo:</span> {user.sexo}
            </p>
            <p>
              <span>Temperatura:</span> {user.temperatura}
            </p>
            <p>
              <span>Peso:</span> {user.peso}
            </p>
            <p>
              <span>Altura:</span>  {user.altura}
            </p>
            <Link to={`/competidor/${id}/edit`}>Editar</Link>
          </Styled.ShowUser>
        }
    </Container>
  )
}

export default ShowCompetidor
