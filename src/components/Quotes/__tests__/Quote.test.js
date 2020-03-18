import React from 'react';
import ReactDOM from 'react-dom';

import Quote from '../Quote.js';

test('Quote show text and author', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Quote text="quote text" author="Riza" />, container);
  expect(container.textContent).toMatch(`"quote text" --Riza`);
});
