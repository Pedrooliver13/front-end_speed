import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/Container';
import * as Styled from './style';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Link to="/">Corridas</Link>

        <Link to="/historicos">historicos</Link>
      </Container>
    </Styled.Wrapper>
  );
};

export default React.memo(Header);
