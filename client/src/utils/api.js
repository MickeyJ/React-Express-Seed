import axios from 'axios'
import JWT from './jwt'

axios.defaults.baseURL = (
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9000/api/v1'
    : `${window.location.origin}/api/v1`
);

axios.interceptors.request.use(function (config) {
  const token = JWT.fetch();

  if(token) config.headers['authorization'] = token;

  return config;
}, function (error) {

  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {

  return response;
}, function (error) {

  return Promise.reject(error);
});



export default axios