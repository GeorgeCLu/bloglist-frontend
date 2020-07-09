/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';

const Blog = ({ blog, like }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };

  const { title } = blog;
  const { author } = blog;
  const { url } = blog;
  let { likes } = blog;
  const { id } = blog;

  const likeBlog = (event) => {
    likes += 1;
    event.preventDefault();
    like(
      id,
      {
        title,
        author,
        url,
        likes,
      },
    );
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
        <button type="submit" onClick={likeBlog}>like</button>
        <br />
        {blog.author}
      </div>
    </div>
  );
};

export default Blog;
