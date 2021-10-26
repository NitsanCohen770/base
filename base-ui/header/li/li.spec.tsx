import React from 'react';
import { render } from '@testing-library/react';
import { BasicLi } from './li.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicLi />);
  const rendered = getByText('hello from Li');
  expect(rendered).toBeTruthy();
});
