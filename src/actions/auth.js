import { LOGIN_SUCCESS } from "../types/auth";
import { loginAPI } from "../api/auth";

export const loginAction = ({ email, password }) => async dispatch => {
  // dispatch {type, payload} to reducer
  let res = await loginAPI({ email, password }); // call api login
  if (res.status === 200) {
    //res.status === 200 => check if APi return success
    // my toke  at here is key
    localStorage.setItem("my_token", JSON.stringify(res.data.token)); // JSON.stringify => convert from JSON to string

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {}
    });
  }
};
