import {
  AUTH_USER,
  AUTH_USER_SUCCESS,
  AUTH_ERROR,
  SIGN_OUT,
  SIGNIN_REQUEST
} from "./types";

export const signupRequest = ({ email, password }, redirect) => {
  return {
    type: AUTH_USER,
    payload: {
      email,
      password,
      redirect
    }
  };
};

export const signupSuccess = ({ auth }) => {
  return {
    type: AUTH_USER_SUCCESS,
    payload: auth
  };
};

export const authError = ({ error }) => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

export const signoutRequest = () => {
  return {
    type: SIGN_OUT
  };
};

export const signinRequest = ({ email, password }, redirect) => {
  return {
    type: SIGNIN_REQUEST,
    payload: {
      email,
      password,
      redirect
    }
  };
};
