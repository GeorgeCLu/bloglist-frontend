/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// https://stackoverflow.com/questions/48107943/line-5-tags-is-missing-in-props-validation-react-prop-types
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick} type="submit">
    {text}
  </button>
);

export default Button;
