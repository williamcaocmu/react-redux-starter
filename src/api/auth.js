import Axios from "axios";

const baseURL = "http://localhost:3000/api";

export const loginAPI = ({ email, password }) => {
  //return a promise
  return Axios.post(`${baseURL}/login`, { email, password });
};
