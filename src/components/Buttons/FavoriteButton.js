import React from 'react';

const FavoriteButton = ({ handleClick, text }) => {
  return (
    <button className="nes-btn" onClick={handleClick}>
      <i className="nes-icon heart is-small is-empty" /> Favorite
    </button>
  );
};

export default FavoriteButton;
