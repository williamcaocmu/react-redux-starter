import { LOGIN_SUCCESS } from "../types/auth";

const initialState = {
  isLogged: false // check if user has logged in
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, isLogged: true };

    default:
      return state;
  }
};
