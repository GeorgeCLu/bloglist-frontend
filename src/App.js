/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import Blog from './components/Blog';
import Button from './components/Button';
import LoginForm from './components/LoginForm';
import BlogForm from './components/BlogForm';
import Togglable from './components/Togglable';
import Notification from './components/Notification';
import Footer from './components/Footer';
import blogService from './services/blogs';
import loginService from './services/login';

const App = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('some error happened...');

  // effect hooks
  useEffect(() => {
    // eslint-disable-next-line no-shadow
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  // ref offers a reference to the component.
  // The visibility is controlled with the visible variable inside of the Togglable component.
  const blogFormRef = React.createRef();

  const sortIdAsc = () => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
    // no id, could add date field
    // setBlogs(blogs.sort((a, b) => a.id - b.id).map((blog) => (blog)));
  };

  const sortLikesAsc = () => {
    setBlogs(blogs.sort((a, b) => a.likes - b.likes).map((blog) => (blog)));
  };

  const sortLikesDesc = () => {
    setBlogs(blogs.sort((a, b) => b.likes - a.likes).map((blog) => (blog)));
  };

  const addBlog = (blogObject) => {
    try {
      blogFormRef.current.toggleVisibility();
      blogService
        .create(blogObject)
        .then((returnedBlog) => {
          setBlogs(blogs.concat(returnedBlog));
          // then(response => {
          // setNotes(notes.concat(response.data))
          setMessage(`a new blog ${blogObject.title} by  ${blogObject.author} added`);
        });
    } catch (exception) {
      console.log('failed');
      setMessage('Failed to post');
      // setTimeout(() => {
      //   setErrorMessage(null);
      // }, 5000);
    }
  };

  const likeBlog = (blogid, blogObject) => {
    try {
      blogService
        .update(blogid, blogObject)
        .then((returnedBlog) => {
          setBlogs(blogs.map((blog) => (blog.id !== blogid ? blog : returnedBlog)));
          setMessage(`liked ${blogObject.title} by  ${blogObject.author}`);
        });
    } catch (exception) {
      console.log('failed');
      setMessage('Failed to like');
      // setTimeout(() => {
      //   setErrorMessage(null);
      // }, 5000);
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const user = await loginService.login({
        username, password,
      });

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user),
      );
      blogService.setToken(user.token);
      setUser(user);
      setMessage('logged in');
    } catch (exception) {
      console.log('failed');
      setMessage('Wrong username or password');
      // setTimeout(() => {
      //   setErrorMessage(null);
      // }, 5000);
    }
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      window.localStorage.removeItem('loggedBlogappUser');
      blogService.setToken('');
      setUser(null);
      console.log('logged out');
    } catch (exception) {
      console.log('failed to log out');
      // setErrorMessage('Wrong credentials');
      // setTimeout(() => {
      //   setErrorMessage(null);
      // }, 5000);
    }
  };

  // display property is none if we do not want the component to be displayed:
  const loginForm = () => (
    <Togglable buttonLabel="login">
      <LoginForm
        login={handleLogin}
      />
    </Togglable>
  );

  const addBlogForm = () => (
    <Togglable buttonLabel="create new blog" ref={blogFormRef}>
      <BlogForm
        createBlog={addBlog}
      />
    </Togglable>
  );

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification message={message} />
        {loginForm()}
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={message} />
      <p>
        {user.name}
        {' logged in '}
        <Button
          handleClick={handleLogout}
          text="logout"
        />
      </p>
      {addBlogForm()}
      <Button
        handleClick={sortIdAsc}
        text="sort by id asc"
      />
      <Button
        handleClick={sortLikesAsc}
        text="sort by likes asc"
      />
      <Button
        handleClick={sortLikesDesc}
        text="sort by likes desc"
      />
      {blogs.map((blog) => <Blog key={blog.id} blog={blog} like={likeBlog} />)}
      <br />
      <Footer />
      <br />
    </div>
  );
};

export default App;
