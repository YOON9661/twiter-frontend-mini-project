import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
    POST_UPDATE_REQUEST,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_FAILURE,
    POST_DELETE_REQUEST,
    POST_DELETE_SUCCESS,
    POST_DELETE_FAILURE
} from "../../redux/post/postUd";

export default function* postUdSaga() {
    yield all([
        fork(watchPostUpdate),
        fork(watchPostDelete)
    ])
}


// post update 
function postUpdateAPI(data) { // API CHANGE
    return axios.post("/post/:id/update", data);
}
function* postUpdate(action) {
    try {
        const result = yield call(postUpdateAPI, action.payload);
        yield put({
            type: POST_UPDATE_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: POST_UPDATE_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchPostUpdate() {
    yield takeLatest(POST_UPDATE_REQUEST, postUpdate);
}


// post delete
function postDeleteAPI(data) {
    return axios.post(`/post/${data}/delete`);
}
function* postDelete(action) {
    try {
        const result = yield call(postDeleteAPI, action.payload);
        yield put({
            type: POST_DELETE_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: POST_DELETE_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchPostDelete() {
    yield takeLatest(POST_DELETE_REQUEST, postDelete);
}