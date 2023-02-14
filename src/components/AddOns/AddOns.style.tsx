import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
`;

const DescriptionText = styled.div`
text-sm mt-3;

@media (max-width: 767px) {
text-xs mt-2;
}
`;

const AddOnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100 %;
  padding: 1rem;
  box-sizing: border-box;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Title = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Price = styled.div`
  font-size: 0.875rem;
  text-align: right;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Text = styled.div`
  font-size: 0.875rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export {
  Container,
  AddOnsContainer,
  Grid,
  Title,
  Price,
  Text,
  ButtonContainer,
  DescriptionText,
};
