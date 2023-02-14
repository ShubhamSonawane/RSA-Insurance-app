import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  max-width: 740px;
  margin: 0 auto;
  padding: 6px 4px;
  @media (min-width: 640px) {
    padding: 6px 8px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: #2d3748;
  text-align: center;
`;

export { HeaderWrapper, Container, Title };
