import React from 'react';
import * as Styled from './style';

const TextArea = ({ name, label, value, placeholder, defaultValue, onBlur, error, onChange }) => {
  return (
    <label htmlFor={name}>
      {label}
      <Styled.Descricao
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        rows="5"
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <Styled.Error>{error}</Styled.Error>}
    </label>
  );
};

export default TextArea;
