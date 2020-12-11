import styled from 'styled-components';
import * as C from '../../styles/Constans';

export const ShowPista = styled.div`
  margin: 80px auto;
  padding: 64px;
  background: #FFF;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.5;
  
  span {
    font-weight: bold;
    display: block;
    color: #41414D;
  }

  a {
    font-weight: bold;
    color: #f56783;
  }

  @media (max-width: ${C.MD}) {
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    line-height: 3;
  }
`