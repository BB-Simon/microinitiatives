import * as types from "../../actions/types";
const initialState = {
  isLoading: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case types.HIDE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loaderReducer;
