import styled from 'styled-components';

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Container = styled.div`
  padding-bottom: 10px;

  @media (max-width: 767px) {
    padding-bottom: 5px;
  }
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const SubText = styled.div`
  font-size: 16px;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

const StyledPriceBox = styled.div`
  background-color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  text-align: center;

  @media (max-width: 767px) {
    margin: 0.625rem;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: normal;
    margin-top: 1.25rem;

    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }

  h4 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-top: 0.625rem;

    @media (max-width: 767px) {
      font-size: 1.25rem;
    }
  }

  .price-note {
    font-size: 0.875rem;
    margin-top: 1.25rem;
    width: 70%;

    @media (max-width: 767px) {
      width: 100%;
      font-size: 0.75rem;
    }
  }

  .toggle-payment {
    margin-top: 1.25rem;

    @media (max-width: 767px) {
      width: 90%;
    }
  }
`;

export { Content, Container, Text, SubText, StyledPriceBox };
