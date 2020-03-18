import React from 'react';
import PropTypes from 'prop-types';

const NextButton = ({ handleClick, title }) => {
  return (
    <button className="nes-btn is-success" onClick={handleClick}>
      {title}
    </button>
  );
};

NextButton.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default NextButton;
