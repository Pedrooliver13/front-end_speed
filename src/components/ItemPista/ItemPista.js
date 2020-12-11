import React from 'react'
import * as Styled from './style';

import { CgInfinity } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const ItemPista = ({ pista }) => {
  return (
      <Styled.ListPista>
        <div className="icon">
          <CgInfinity size={27} color="#000" />
        </div>

        <div className="name">
          <p>{pista.descricao}</p>
        </div>

        <div className="info">
          <Link to={`/pista/${pista.id}`}>Ver Infos</Link>
        </div>
      </Styled.ListPista>
  )
}

export default ItemPista
