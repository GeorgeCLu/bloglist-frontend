/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className="error">
      {message}
    </div>
  );
};

export default Notification;
