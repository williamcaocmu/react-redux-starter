const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "test":
      return { ...state, ...payload };

    default:
      return state;
  }
};
