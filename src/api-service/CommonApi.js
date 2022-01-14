import Api from "./Api";
import axios from "axios";


export default {
  getData(END_POINT) {
    axios.defaults.headers["accept"] = "application/json";
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.responseType = "application/json";
    return Api.get(END_POINT);
  },
  postData(END_POINT, data) {
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.responseType = "application/json";
    return Api.post(END_POINT, data);
  },
  postDataWithFile(END_POINT, data) {
    axios.defaults.headers["Content-Type"] = "multipart/form-data";
    return Api.post(END_POINT, data);
  },
  deleteData(END_POINT) {
    return Api.delete(END_POINT);
  },
  getExcel(END_POINT) {
    axios.defaults.headers["accept"] = "application/vnd.ms-excel";
    axios.defaults.responseType = "arraybuffer";
    return Api.get(END_POINT);
  },
  getPDF(END_POINT) {
    axios.defaults.headers["accept"] = "application/pdf";
    axios.defaults.responseType = "arraybuffer";
    return Api.get(END_POINT);
  },
};
