import axios from 'axios';
import config from './ajax.config';

const instance = axios.create(config);
const get = function (url) {
  return instance.get(url)
}
const post = function (url, params) {
  return instance.post(url, params);
}

const ajax = { get, post }
export default ajax;
