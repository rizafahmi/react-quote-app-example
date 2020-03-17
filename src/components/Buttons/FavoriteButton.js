import React from 'react';

const ShareButton = ({ text }) => {
  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${text}`}
      target="_blank"
      title="Post this quote on twitter!"
      rel="noopener noreferrer"
      className="nes-btn is-primary"
    >
      <i className="nes-icon twitter is-small" /> Share
    </a>
  );
};

export default ShareButton;
