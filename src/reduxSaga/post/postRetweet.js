import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
    POST_RETWEET_REQUEST,
    POST_RETWEET_SUCCESS,
    POST_RETWEET_FAILURE
} from "../../redux/post/postRetweet";

export default function* postRetweetSaga() {
    yield all([
        fork(watchPostRetweet)
    ])
}

// login
function postRetweetAPI(data) {
    return axios.post("/retweet/:id", data);
}
function* postRetweet(action) {
    try {
        const result = yield call(postRetweetAPI, action.payload);
        yield put({
            type: POST_RETWEET_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: POST_RETWEET_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchPostRetweet() {
    yield takeLatest(POST_RETWEET_REQUEST, postRetweet);
}
