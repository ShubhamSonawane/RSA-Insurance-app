import styled from 'styled-components';

const Main = styled.main`
  margin-top: 50px;
  padding: 20px;
  @media (max-width: 767px) {
    padding: 10px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
  margin-top: 24px;
  text-align: left;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export { Main, Content, Title };
