import axios from "./axios";

const ajax = {
  get: (url, params) => axios.get(url, { params }),
  post: (url, params) => axios.post(url, params),
  put: (url, params) => axios.put(url, params),
  delete: (url, params) => axios.delete(url, params)
};

export default ajax;
