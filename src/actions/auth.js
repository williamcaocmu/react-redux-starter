import { LOGIN } from "../types/auth";

export const loginAction = payload => dispatch => {
  // dispatch {type, payload} to reducer
  dispatch({
    type: LOGIN,
    payload
  });
};
