import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;
