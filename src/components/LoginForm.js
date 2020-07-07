/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// The app state has fields for username and password to store the data from the form.
// The form fields have event handlers,
// which synchronize changes in the field to the state of the App component.
// The event handlers are simple: An object is given to them as a parameter,
// and they destructure the field target from the object
// and save its value to the state.

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
// eslint-disable-next-line arrow-body-style
}) => {
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          username
          <input
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginForm;
