import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from "../../redux/userRedux";

export default function* userGetSaga() {
    yield all([
        fork(watchGetUser)
    ])
}

// getUser -- profile에 필요
function getUserAPI(data) {
    return axios.post("/user/:id", data);
}
function* getUser(action) {
    try {
        const result = yield call(getUserAPI, action.payload);
        yield put({
            type: GET_USER_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: GET_USER_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchGetUser() {
    yield takeLatest(GET_USER_REQUEST, getUser);
}