import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { signupRequest } from "../../actions/index";
import { connect } from "react-redux";

const Signup = props => {
  const onSubmit = formProps => {
    props.signupRequest(formProps, token => {
      localStorage.setItem("mywebtoken", token);
      props.history.push("/feature");
    });
  };
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field
          name="email"
          type="text"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <div>{props.errorMessage}</div>
      <button>Sign up!!</button>
    </form>
  );
};

const mapStateToProps = ({ auth }) => ({
  errorMessage: auth.errorMessage
});
export default compose(
  connect(
    mapStateToProps,
    { signupRequest }
  ),
  reduxForm({ form: "signup" })
)(Signup);
