import React from 'react';
import { render } from '@testing-library/react';
import Error from './Error';

describe('Error component', () => {
  it('renders error message', () => {
    const errorMessage = 'An error has occurred';
    const { getByText } = render(<Error errorMessage={errorMessage} />);
    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it('renders the error component with the correct styles', () => {
    const errorMessage = 'An error has occurred';
    const { getByText } = render(<Error errorMessage={errorMessage} />);
    const errorDiv = getByText(errorMessage).parentElement;
    expect(errorDiv).toHaveClass(
      'bg-red-500 text-white p-3 rounded-lg shadow-lg text-center'
    );
  });

  it('renders the error title with the correct styles', () => {
    const errorMessage = 'An error has occurred';
    const { getByText } = render(<Error errorMessage={errorMessage} />);
    expect(getByText('Error')).toHaveClass('text-lg font-bold');
  });
});
