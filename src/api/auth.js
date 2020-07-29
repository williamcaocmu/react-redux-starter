import Axios from "axios";

const baseURL = "book-from-jun.herokuapp.com/api";

export const loginAPI = ({ email, password }) => {
  Axios.post(`${baseURL}/login`, { email, password });
};
