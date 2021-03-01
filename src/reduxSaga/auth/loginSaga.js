import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from "../../redux/auth/login";

export default function* loginSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout)
    ])
}
// login
function loginAPI(data) {
    return console.log(data);
}
function* login(action) {
    try {
        const result = yield call(loginAPI, action.payload);
        yield put({
            type: LOGIN_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: LOGIN_FAILURE,
            payload: "err" // err.response.data
        })
    }
}
function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, login);
}

// logout
function logoutAPI() {
    return axios.post("/user/logout");
}
function* logout() {
    try {
        const result = yield call(logoutAPI)
        yield put({
            type: LOGOUT_SUCCESS,
            payload: result.data
        });
    } catch (err) {
        yield put({
            type: LOGOUT_FAILURE,
            payload: err.response.data
        });
    }
}
function* watchLogout() {
    yield takeLatest(LOGOUT_REQUEST, logout);
}