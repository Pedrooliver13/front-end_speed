import styled from 'styled-components';
import * as C from '../../styles/Constans';

export const Form = styled.form`
  margin: 80px auto;
  padding: 64px;
  background: #FFF;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: ${C.MD}) {
    padding: 1rem;

    h2 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  }
`;

export const Group = styled.div`
  align-self: flex-end;

  button + button {
    margin-left: 1rem;
  }
`;

