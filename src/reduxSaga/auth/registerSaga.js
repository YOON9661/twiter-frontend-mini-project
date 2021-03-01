import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
    REGISTER_REQUEST,
    REGISTER_FAILURE,
    REGISTER_SUCCESS
} from "../../redux/auth/register"

export default function* registerSaga() {
    yield all([
        fork(watchRegister)
    ])
}

// login
function registerAPI(data) {
    return console.log(data);
    // axios.post("/user/register", data);
}
function* register(action) {
    try {
        const result = yield call(registerAPI, action.payload);
        yield put({
            type: REGISTER_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: REGISTER_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchRegister() {
    yield takeLatest(REGISTER_REQUEST, register);
}

