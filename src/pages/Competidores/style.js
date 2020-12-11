import styled from 'styled-components';
import * as C from '../../styles/Constans';

export const Title = styled.h2`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 0.875rem;
  font-weight: 600;
  color: #43444a;
  margin-bottom: 1rem;

  a {
    color: #999;
  }
`;

export const Label = styled.label`
  line-height: 5;
  cursor: pointer;
  margin-right: 0.5rem;
`;

export const ShowUser = styled.div`
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

    span {
      display: inline-block;
    }
  }
`

