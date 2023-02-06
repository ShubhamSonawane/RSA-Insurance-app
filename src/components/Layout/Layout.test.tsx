import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout component', () => {
  it('renders children within a container with specific styles', () => {
    const children = <p>Hello World!</p>;
    const { getByText } = render(<Layout>{children}</Layout>);
    expect(getByText('Hello World!')).toBeInTheDocument();
  });

  it('renders a container with specific styles', () => {
    const children = <p>Hello World!</p>;
    const { container } = render(<Layout>{children}</Layout>);
    const layoutContainer = container.firstChild;
    expect(layoutContainer).toHaveClass(
      'mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'
    );
  });
});
