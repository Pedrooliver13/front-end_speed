import styled from 'styled-components';

export const Descricao = styled.textarea`
  width: 100%;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  border-right: 4px solid #ff79c6;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;
  outline: none;
  resize: none;
  transition: 0.5s ease;

  &:hover, &:focus {
    border-color: #50fa7b; 
  } 
`;

export const Error = styled.p`
  font-weight: lighter;
  font-size: 1rem;
  line-height: 1.5;
  color: #E02041;
`