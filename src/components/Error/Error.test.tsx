// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { render } from '@testing-library/react';
import Error from './Error';

describe('Error component', () => {
  it('renders error message', () => {
    const error = { errorMessage: { message: 'An error has occurred' } };
    const { getByText } = render(<Error errorMessage={error} />);
    expect(getByText('Error')).toBeInTheDocument();
  });

  it('renders the error component with the correct styles', () => {
    const error = { errorMessage: { message: 'An error has occurred' } };
    const { getByText } = render(<Error errorMessage={error} />);
    const errorDiv = getByText('Error').parentElement;
    expect(errorDiv).toHaveClass(
      'bg-red-500 text-white p-3 rounded-lg shadow-lg text-center'
    );
  });

  it('renders the error title with the correct styles', () => {
    const error = { errorMessage: { message: 'An error has occurred' } };
    const { getByText } = render(<Error errorMessage={error} />);
    expect(getByText('Error')).toHaveClass('text-lg font-bold');
  });
});
