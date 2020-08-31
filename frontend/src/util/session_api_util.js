import axios from 'axios';
import { use } from 'passport';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export const signup = userData => {
  return axios.post('/api/users/register', userData)
}

export const login = userData => {
  return axios.post('/api/users/login', userData)
}