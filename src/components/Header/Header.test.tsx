import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('renders content correctly', () => {
    const content = 'My header';
    const { getByText } = render(<Header content={content} />);
    const titleElement = getByText(content);
    expect(titleElement).toBeInTheDocument();
  });
});
