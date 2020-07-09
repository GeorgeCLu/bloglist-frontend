import axios from 'axios';

const baseUrl = '/api/blogs';

let token = null;

// changes value of token
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

// sets token to authorization header
// header is given to axios as the third parameter of the post method
const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = (id, newObject) => {
  const updateUrl = `${baseUrl}/${id}`;
  const request = axios.put(updateUrl, newObject);
  return request.then((response) => response.data);
};

export default {
  getAll, create, update, setToken,
};
