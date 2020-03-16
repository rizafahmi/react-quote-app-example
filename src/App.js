import React, { useState, useEffect, Suspense, lazy } from 'react';

import { getQuote } from './lib/utility.js';
import NextButton from './components/NextButton.js';
import ShareButton from './components/ShareButton.js';
import Navigation from './components/Navigation.js';
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
    <>
      <Navigation />
      <div
        style={{ margin: '2em', marginTop: '6em', backgroundColor: '#212529' }}
        className="nes-container with-title is-dark"
      >
        <h1 className="title">Quote of the day</h1>
        <Suspense fallback={renderLoader()}>
          <Quote text={text} author={author} />
        </Suspense>
        <NextButton title="Next Quote" handleClick={getNextQuote} />
        <button className="nes-btn">
          <i className="nes-icon heart is-small is-empty" /> Favorite
        </button>
        <ShareButton text={`${text} --${author}`} />
      </div>
    </>
  );
};

export default App;
