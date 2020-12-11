import styled from 'styled-components';
import * as C from '../../styles/Constans';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1.2rem 0;
  margin-bottom: 2rem;

  & :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: ${C.MD}) {
      justify-content: center;
    }
  }

  a {
    font-size: 1.4rem;
    color: #000;
  }

  button {
    background: transparent;
    border: 0;
    color: #f56783;
    font-size: 0.75rem;
  }
`;
