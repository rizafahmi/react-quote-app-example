import React from 'react';
import { render } from '@testing-library/react';

import Navigation from '../Navigation.js';

test('render Navigation bar', () => {
  const { container } = render(
    <Navigation favorites={[{ text: 'Quote #1', author: 'Riza Fahmi' }]} />
  );
  const header = container.querySelector('header');
  const navContainer = container.querySelector('div.container');
  const navBrand = container.querySelector('div.nav-brand');
  const h1 = container.querySelector('h1');

  expect(header).toBeDefined();
  expect(navContainer).not.toBeNull();
  expect(navBrand).not.toBeNull();
  expect(h1.textContent).toMatch('Quotation.app');
});
