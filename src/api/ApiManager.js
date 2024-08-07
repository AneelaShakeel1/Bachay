import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'https://bachay.com/api/v1/',
  // baseURL: 'http://192.168.100.33/bachay/api/v1/',
  withCredentials: true,
});

export default ApiManager;
