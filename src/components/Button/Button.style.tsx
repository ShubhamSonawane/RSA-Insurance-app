import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  width: auto;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background-color: #24a0ed;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #2292c9;
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border-color: #24a0ed;
    box-shadow: 0 0 0 3px rgba(36, 160, 237, 0.5);
  }
  @media (max-width: 576px) {
    width: 90%;
    font-size: 0.875rem;
    padding: 0.5rem 1.125rem;
  }
`;

export default StyledButton;
