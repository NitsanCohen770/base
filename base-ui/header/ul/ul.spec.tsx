import React from 'react';
import { render } from '@testing-library/react';
import { BasicUl } from './ul.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUl />);
  const rendered = getByText('hello from Ul');
  expect(rendered).toBeTruthy();
});
