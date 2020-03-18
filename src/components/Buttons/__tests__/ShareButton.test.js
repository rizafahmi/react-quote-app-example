import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ShareButton from '../ShareButton.js';

test('ShareButton renders', () => {
  const { container } = render(<ShareButton text={`Text --author`} />);
  const { href } = container.querySelector('a');
  expect(href).toEqual('https://twitter.com/intent/tweet?text=Text%20--author');
});
