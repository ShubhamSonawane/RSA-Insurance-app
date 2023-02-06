import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders text correctly', () => {
    const text = 'Click me';
    const { getByText } = render(<Button text={text} onClick={() => {}} />);
    const button = getByText(text);
    expect(button).toBeInTheDocument();
  });

  it('calls onClick prop on button click', () => {
    const onClick = jest.fn();
    const text = 'Click me';
    const { getByText } = render(<Button text={text} onClick={onClick} />);
    const button = getByText(text);
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
