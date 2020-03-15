import React from 'react';

const Quote = ({ text, author }) => (
  <h3>
    <span className="nes-text is-success">"{text}"</span>{' '}
    <span className="nes-text is-disabled">--{author}</span>
  </h3>
);

export default Quote;
