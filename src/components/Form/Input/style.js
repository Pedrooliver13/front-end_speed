import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: .8rem;
`;

export const Label = styled.label`
  line-height: 1.5;
  font-size: 1rem;
  font-weight: lighter;
`;

export const Input = styled.input`
  width: 100%;
  background: #F0F0F5;
  border-radius: 8px;
  border: none;
  border-right: 4px solid #ff79c6;
  padding: 16px 24px;
  font-size: 16px;
  color: #6C6C80;
  outline: 0;
  transition: border .5s ease;

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