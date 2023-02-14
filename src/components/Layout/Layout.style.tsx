import styled from 'styled-components';

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 6px;
  @media (min-width: 640px) {
    padding: 6px;
  }
  @media (min-width: 1024px) {
    padding: 6px;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

export { Container, Content };
