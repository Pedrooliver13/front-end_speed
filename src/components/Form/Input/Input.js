import React from 'react';
import * as Styled from './style';

const Input = ({ label, type, name, value, placeholder, onBlur, error, onChange, refs, defaultValue }) => {
  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Input
        type={type}
        id={name}
        name={name}
        value={value}
        defaultValue={defaultValue}
        ref={refs}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Styled.Error>{error}</Styled.Error>}
    </Styled.Wrapper>
  );
};

export default Input;
