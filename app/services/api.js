import Service from '@ember/service';
import axios from 'axios';

export default class ApiService extends Service {
  ax = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 1000,
    headers: {},
  });
}
