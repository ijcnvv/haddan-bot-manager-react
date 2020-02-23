import axios from "axios";
import { getToken } from "../utils/token";

const headers = {
  HTTP_X_REQUESTED_WITH: "XMLHttpRequest",
  Accept: "application/json",
  "Content-Type": "application/json"
};

const api = axios.create({
  baseURL: "/api",
  headers
});

api.interceptors.request.use(request => {
  request.headers.Authorization = getToken();
  return request;
});

export default api;
