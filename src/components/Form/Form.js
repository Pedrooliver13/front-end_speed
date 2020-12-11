import React from 'react';
import * as Styled from './style';

const Form = ({ children, title, ...props }) => {
  function onSubmit(event) {
    event.preventDefault();
  }
  
  return (
    <Styled.Form onSubmit={onSubmit}>
      <div>
        <h2>{title}</h2>
      </div>

      {children}
    </Styled.Form>
  );
};

export default Form;
