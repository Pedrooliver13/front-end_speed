import React from 'react';
import * as Styled from './style';

const Select = ({ options, label, name, value, setValue, children, defaultValue }) => {
  return (
    <div>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Select
        id={name}
        value={value}
        defaultValue={defaultValue}
        onChange={setValue}
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
