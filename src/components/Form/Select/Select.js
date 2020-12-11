import React from 'react';
import * as Styled from './style';

const Select = ({ options, label, name, value, setValue, children }) => {
  return (
    <div>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Select
        id={name}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      >
        <option value="" disable="true">
          Selecione
        </option>
        {children}
      </Styled.Select>
    </div>
  );
};

export default Select;
