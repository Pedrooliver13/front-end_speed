import styled from 'styled-components';
import * as C from '../../../styles/Constans';

export const Button = styled.button`
  width: 260px;
  height: 56px;
  background: #34CB79;
  border-radius: 8px;
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  outline: none;
  align-self: flex-end;
  margin-top: 40px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:focus,
  &:hover {
    background: #2FB86E;
  }
`

export const ButtonRed = styled(Button)`
  background-color: #E02041;
  color: #FFF;

  &:hover, &:focus {
  background-color: #c81e3a;
  }
`;

export const Group = styled.div`
  align-self: flex-end;

  button + button {
    margin-left: 1rem;
  }

  @media (max-width: ${C.MD}) {
    align-self: center;

    button + button {
      margin-left: 0;
    }
  }
`;