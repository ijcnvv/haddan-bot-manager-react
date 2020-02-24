import axios from "./axios";

const axiosRequest = async fn => {
  try {
    const { data } = await fn();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

const ajax = {
  get: (url, params) => axiosRequest(() => axios.get(url, { params })),
  post: (url, params) => axiosRequest(() => axios.post(url, params)),
  put: (url, params) => axiosRequest(() => axios.put(url, params)),
  delete: (url, params) => axiosRequest(() => axios.delete(url, params))
};

export default ajax;
