import React from 'react';
import * as Styled from './style';

import { Link } from 'react-router-dom';
import { GiRaceCar } from 'react-icons/gi';
import { AiOutlineMan, AiOutlineWoman } from 'react-icons/ai';

const Competidor = ({ user }) => {

  if(user)
  return (
    <Styled.ListCompetidor>
      <div className="icon">
        <GiRaceCar size={40} color="#41414D" />
      </div>

      <div className="name">
        <p>{user.nome}</p>
        <p>
          {user.sexo === 'M' ? (
            <AiOutlineMan size={14} color="#4183d7" />
          ) : (
            <AiOutlineWoman size={14} color="#f1828d" />
          )}
        </p>
      </div>

      <div className="info">
        <Link to={`competidor/${user.id}`}>Ver Infos</Link>
      </div>
    </Styled.ListCompetidor>
  );
  else return null;
};

export default Competidor;
