import React from 'react';

const NextButton = ({ handleClick, title }) => {
  return (
    <button
      className="nes-btn is-success"
      style={{ marginRight: '1em' }}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default NextButton;
