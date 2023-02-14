import styled from 'styled-components';

const ErrorContainer = styled.div`
  background-color: #ff5252;
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px #ff5252;
  text-align: center;
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const ErrorTitle = styled.p` 
font-weight: bold; 
font-size: 1.125rem; 
@media(min-width: 768px) 
{ font - size: 1.5rem; }`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export { ErrorContainer, ErrorTitle, ErrorMessage };
