/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BlogForm = ({
  createBlog,
// eslint-disable-next-line arrow-body-style
}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const addBlog = (event) => {
    event.preventDefault();
    createBlog({
      title,
      author,
      url,
      likes: 0,
    });

    setTitle('');
    setAuthor('');
    setUrl('');
  };

  return (
    <form onSubmit={addBlog}>
      <div>
        Title
        <input
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        Author
        <input
          value={author}
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        URL
        <input
          value={url}
          onChange={handleUrlChange}
        />
      </div>
      <button type="submit">post</button>
    </form>
  );
};

BlogForm.propTypes = {
  createBlog: PropTypes.func.isRequired,
};

export default BlogForm;
