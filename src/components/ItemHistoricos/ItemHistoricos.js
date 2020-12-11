import React from 'react'
import {Link} from 'react-router-dom';

import * as Styled from './style';
import { AiOutlineHistory } from 'react-icons/ai';


const ItemHistoricos = ({ historico }) => {
  return (
    <Styled.ListHitoricos>
    <div className="icon">
      <AiOutlineHistory size={27} color="#000" />
    </div>

    <div className="name">
      <p>{historico.nome}</p>
      <p>{historico.data_corrida}</p>
      <p>{historico.descricao}</p>
      <p>{historico.tempo} Minutos</p>
    </div>

    <div className="info">
      <Link to={`/historico/${historico.id}`}>Ver Infos</Link>
    </div>
  </Styled.ListHitoricos>
  )
}

export default ItemHistoricos
