import axios from "axios";

import jwtService from "./jwt.service";

const Api = axios.create({
  baseURL: "https://reqres.in/api/",
});
Api.interceptors.request.use(
  (conf) => {
    conf.headers.common.Authorization = `Bearer ${jwtService.getToken()}`;
    return conf;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default Api;
