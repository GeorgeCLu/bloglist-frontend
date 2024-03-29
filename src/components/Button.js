/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick} type="submit">
    {text}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
