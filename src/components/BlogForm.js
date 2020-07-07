/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const BlogForm = ({
  handleSubmit,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange,
  title,
  author,
  url,

// eslint-disable-next-line arrow-body-style
}) => {
  return (
    <form onSubmit={handleSubmit}>
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

export default BlogForm;
