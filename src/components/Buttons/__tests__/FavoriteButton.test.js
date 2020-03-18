import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FavoriteButton from '../FavoriteButton.js';

test('FavoriteButton renders', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<FavoriteButton handleClick={handleClick} />);
  const button = getByText('Favorite');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
