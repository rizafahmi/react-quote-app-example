import React, { useState, useEffect, Suspense, lazy } from 'react';

import { getQuotes, randomizeQuote } from './lib/utility.js';
const Quote = lazy(() => import('./components/Quote.js'));

const App = () => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    (async () => {
      const quotes = await getQuotes('https://type.fit/api/quotes');
      const quote = randomizeQuote(quotes);
      setText(quote.text);
      setAuthor(quote.author);
    })();
  }, []);

  const renderLoader = () => <h4>Loading...</h4>;

  return (
    <div style={{ margin: '2em' }}>
      <h1>Quoute of the day</h1>
      <Suspense fallback={renderLoader()}>
        <Quote text={text} author={author} />
      </Suspense>
      <button onClick={() => {}}>Next Quote</button>
    </div>
  );
};

export default App;
