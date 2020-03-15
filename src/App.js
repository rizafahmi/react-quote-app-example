import React, { useState, useEffect, Suspense, lazy } from 'react';

import { getQuote } from './lib/utility.js';
const Quote = lazy(() => import('./components/Quote.js'));

const App = () => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const getNextQuote = async () => {
    const { text, author } = await getQuote();
    setText(text);
    setAuthor(author);
  };

  useEffect(() => {
    getNextQuote();
  }, []);

  const renderLoader = () => <h4>Loading...</h4>;

  return (
    <div style={{ margin: '2em' }} className="nes-container with-title">
      <h1 className="title">Quote of the day</h1>
      <Suspense fallback={renderLoader()}>
        <Quote text={text} author={author} />
      </Suspense>
      <button
        className="nes-btn is-success"
        style={{ marginRight: '1em' }}
        onClick={getNextQuote}
      >
        Next Quote
      </button>
      <a
        href={`https://twitter.com/intent/tweet?text=${text} --${author}`}
        target="_blank"
        title="Post this quote on twitter!"
        rel="noopener noreferrer"
        className="nes-btn is-primary"
      >
        {' '}
        <i className="nes-icon twitter is-small" /> Share
      </a>
    </div>
  );
};

export default App;
