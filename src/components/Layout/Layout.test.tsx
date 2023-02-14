import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout component', () => {
  it('renders children within a container with specific styles', () => {
    const children = <p>Hello World!</p>;
    const { getByText } = render(<Layout>{children}</Layout>);
    expect(getByText('Hello World!')).toBeInTheDocument();
  });
});
