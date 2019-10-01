import React, { useEffect } from "react";
import { signoutRequest } from "../actions/index";
import { connect } from "react-redux";

const Signout = props => {
  useEffect(() => {
    localStorage.removeItem("mywebtoken");
    props.signoutRequest();
  }, []);
  return <div>Sign Out Page</div>;
};

export default connect(
  null,
  { signoutRequest }
)(Signout);
