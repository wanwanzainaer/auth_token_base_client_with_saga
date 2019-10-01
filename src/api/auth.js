import axios from "./axios";

export const signupRequest = ({ email, password }) => {
  return axios.post("/signup", {
    email,
    password
  });
};

export const signinRequest = ({ email, password }) => {
  return axios.post("/signin", {
    email,
    password
  });
};
