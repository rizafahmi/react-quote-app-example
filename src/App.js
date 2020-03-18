import React, { useState, useEffect, Suspense, lazy } from 'react';

import { getQuote } from './lib/utility.js';
import NextButton from './components/Buttons/NextButton.js';
import FavoriteButton from './components/Buttons/FavoriteButton.js';
import ShareButton from './components/Buttons/ShareButton.js';
import Navigation from './components/Navigation/Navigation.js';
const Quote = lazy(() => import('./components/Quotes/Quote.js'));

const App = () => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [favorites, setFavorite] = useState([]);

  const getNextQuote = async () => {
    const { text, author } = await getQuote();
    setText(text);
    setAuthor(author);
  };
  const addToFavorite = async () => {
    setFavorite(favorites.concat({ text, author }));
  };

  useEffect(() => {
    getNextQuote();
  }, []);

  const renderLoader = () => <h4>Loading...</h4>;

  return (
    <>
      <Navigation favorites={favorites} />
      <div
        style={{ margin: '2em', marginTop: '6em', backgroundColor: '#212529' }}
        className="nes-container with-title is-dark"
      >
        <h1 className="title">Quote of the day</h1>
        <Suspense fallback={renderLoader()}>
          <Quote text={text} author={author} />
        </Suspense>
        <NextButton />
        <FavoriteButton handleClick={addToFavorite} />
        <ShareButton text={`${text} --${author}`} />
      </div>
    </>
  );
};

export default App;
