import styled, { keyframes } from 'styled-components';

export const rotateBar = keyframes`
  to {transform: rotate(360deg);}
`;

export const Wrapper = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;

  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
`

export const LoadingBar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 5px solid #333;
  border-right-color: transparent;
  animation: ${rotateBar} 1s infinite;
`;