import React from 'react';
import { render } from '@testing-library/react';
import Subcomponent from './Subcomponent';

test('renders Subcomponent text', () => {
  const { getByText } = render(<Subcomponent />);
  const linkElement = getByText(/Subcomponent/i);
  expect(linkElement).toBeInTheDocument();
});
