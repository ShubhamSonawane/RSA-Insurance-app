/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';
import StyledButton from './Button.style';

export type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ text, onClick }) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);

export default Button;
