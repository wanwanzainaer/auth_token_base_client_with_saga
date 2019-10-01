import { AUTH_USER_SUCCESS, AUTH_ERROR } from "../actions/types";
const INITIAL_STATE = {
  authenticated: "",
  errorMessage: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER_SUCCESS:
      console.log(action);
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      console.log(action);
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
