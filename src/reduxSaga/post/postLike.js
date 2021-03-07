import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
    POST_LIKE_REQUEST,
    POST_LIKE_SUCCESS,
    POST_LIKE_FAILURE,
    POST_LIKE_DELETE_REQUEST,
    POST_LIKE_DELETE_SUCCESS,
    POST_LIKE_DELETE_FAILURE
} from "../../redux/postRedux";
export default function* postLikeSaga() {
    yield all([
        fork(watchPostLike),
        fork(watchPostLikeDelete)
    ])
}

// POSTLIKE
function postLikeAPI(data) {
    return axios.post(`/post/${data}/like`);
}
function* postLike(action) {
    try {
        const result = yield call(postLikeAPI, action.payload);
        yield put({
            type: POST_LIKE_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: POST_LIKE_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchPostLike() {
    yield takeLatest(POST_LIKE_REQUEST, postLike);
};


// POSTLIKE DELETE  
function postLikeDeleteAPI(data) {
    return axios.delete(`/post/${data}/likedelete`);
}
function* postLikeDelete(action) {
    try {
        const result = yield call(postLikeDeleteAPI, action.payload);
        yield put({
            type: POST_LIKE_DELETE_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: POST_LIKE_DELETE_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchPostLikeDelete() {
    yield takeLatest(POST_LIKE_DELETE_REQUEST, postLikeDelete);
}