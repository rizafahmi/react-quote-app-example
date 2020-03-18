import React from 'react';
import { render } from '@testing-library/react';

import FavMenuItem from '../FavMenuItem.js';

test('Render <FavMenuItem />', () => {
  const total = 5;
  const { container } = render(<FavMenuItem totalFavorite={total} />);
  expect(container.textContent).toMatch(`Favorites(${total})`);
});
