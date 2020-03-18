import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import NextButton from '../NextButton.js';

test('call onClick when button clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <NextButton handleClick={handleClick} title="Next" />
  );
  const button = getByText('Next');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
