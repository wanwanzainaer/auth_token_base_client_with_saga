import { takeLatest, call, fork, put } from "redux-saga/effects";
import * as Types from "../actions/types";
import * as authApi from "../api/auth";
import * as actions from "../actions";

function* signupRequest(action) {
  try {
    const result = yield call(authApi.signupRequest, {
      email: action.payload.email,
      password: action.payload.password
    });
    yield put(
      actions.signupSuccess({
        auth: result.data.token
      })
    );
    console.log("here");
    yield action.payload.redirect(result.data.token);
  } catch (e) {
    yield put(actions.authError({ error: "Email in use" }));
  }
}

function* watchSignupRequest() {
  yield takeLatest(Types.AUTH_USER, signupRequest);
}

function* signoutRequest() {
  yield put(actions.signupSuccess({ atuh: "" }));
}

function* watchSignoutRequest() {
  yield takeLatest(Types.SIGN_OUT, signoutRequest);
}

function* signinRequest(action) {
  try {
    const result = yield call(authApi.signinRequest, {
      email: action.payload.email,
      password: action.payload.password
    });
    yield put(
      actions.signupSuccess({
        auth: result.data.token
      })
    );
    yield action.payload.redirect(result.data.token);
  } catch (e) {
    yield put(
      actions.authError({ error: "Email or password uncorrect" })
    );
  }
}

function* watchSigninRequest() {
  yield takeLatest(Types.SIGNIN_REQUEST, signinRequest);
}
const authSagas = [
  fork(watchSignupRequest),
  fork(watchSignoutRequest),
  fork(watchSigninRequest)
];

export default authSagas;
