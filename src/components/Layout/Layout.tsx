import React, { ReactNode } from 'react';
import { Container, Content } from './Layout.style';

interface LayoutProps {
  children: ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
export default Layout;
