import axios from 'axios';
import { AppError } from '../utils/AppErrror';


export const api = axios.create({
  baseURL: 'http://localhost:3001'
});

api.interceptors.response.use(response => response, error => {
  if (error.response && error.response.data) {
    return Promise.reject(new AppError(error.response.data.message));
  } else {
    return Promise.reject(new AppError('Erro no servidor, por favor! Tente mais tarde'));
  }
});


