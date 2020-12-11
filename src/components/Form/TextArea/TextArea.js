import React from 'react';
import * as Styled from './style';

const TextArea = ({ name, label, value, placeholder, onBlur, error, onChange }) => {
  return (
    <label htmlFor={name}>
      {label}
      <Styled.Descricao
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        rows="5"
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Styled.Error>{error}</Styled.Error>}
    </label>
  );
};

export default TextArea;
