/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, {useState} from 'react';

const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };

  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div style={blogStyle}>
      <div style={hideWhenVisible}>
        {blog.title}
        {' '}
        {blog.author}
        <button type="submit" onClick={toggleVisibility}>view</button>
      </div>
      <div style={showWhenVisible}>
        {blog.title}
        <button type="submit" onClick={toggleVisibility}>hide</button>
        <br />
        {blog.url}
        <br />
        {'likes '}
        {blog.likes}
        <button type="submit" onClick={null}>like</button>
        <br />
        {blog.author}
      </div>
    </div>
  );
};

export default Blog;
