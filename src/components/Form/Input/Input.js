import React from 'react';
import * as Styled from './style';

const Input = ({ label, type, name, value, placeholder, onBlur, error, onChange }) => {
  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Styled.Error>{error}</Styled.Error>}
    </Styled.Wrapper>
  );
};

export default Input;
