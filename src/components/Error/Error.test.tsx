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
});
