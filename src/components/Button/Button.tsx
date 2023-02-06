/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';

export type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ text, onClick }) => (
  <button
    type="button"
    className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
