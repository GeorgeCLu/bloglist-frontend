/* eslint-disable react/jsx-filename-extension */
// display property is none if we do not want the component to be displayed:

//  function that creates the component is wrapped inside of a forwardRef function call.
// This way the component can access the ref that is assigned to it.

// The component uses the useImperativeHandle hook to make its toggleVisibility function
// available outside of the component.

// useImperativeHandle function is a React hook,
// that is used for defining functions in a component
// which can be invoked from outside of the component.
import React, { useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  // eslint-disable-next-line arrow-body-style
  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <button type="submit" onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button type="submit" onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  );
});

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export default Togglable;
