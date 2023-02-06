import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading component', () => {
  it('renders the component', () => {
    const { getByTestId } = render(<Loading />);

    const spinner = getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
