import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Click me and I will charge users! text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Click me and I will charge users!/i);
  expect(linkElement).toBeInTheDocument();
});
