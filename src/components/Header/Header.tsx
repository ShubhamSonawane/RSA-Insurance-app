import React from 'react';
import { HeaderWrapper, Container, Title } from './Header.style';

type HeaderProps = {
  content: string;
};

function Header({ content }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Container>
        <Title>{content}</Title>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
