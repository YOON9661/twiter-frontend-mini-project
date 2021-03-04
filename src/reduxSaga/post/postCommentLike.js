import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
    COMMENT_LIKE_REQUEST,
    COMMENT_LIKE_SUCCESS,
    COMMENT_LIKE_FAILURE,
    COMMENT_LIKE_DELETE_REQUEST,
    COMMENT_LIKE_DELETE_SUCCESS,
    COMMENT_LIKE_DELETE_FAILURE
} from "../../redux/post/postCommentLike";


export default function* postCommentLikeSaga() {
    yield all([
        fork(watchCommentLike),
        fork(watchCommentLikeDelete)
    ])
}

// comment like
function commentLikeAPI(data) {
    return axios.post(`/comment/${data}/like`);
}
function* commentLike(action) {
    try {
        const result = yield call(commentLikeAPI, action.payload);
        yield put({
            type: COMMENT_LIKE_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: COMMENT_LIKE_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchCommentLike() {
    yield takeLatest(COMMENT_LIKE_REQUEST, commentLike);
}


// comment like delete
function commentLikeDeleteAPI(data) {
    return axios.delete(`/comment/${data}/like/delete`);
}
function* commentLikeDelete(action) {
    try {
        const result = yield call(commentLikeDeleteAPI, action.payload);
        yield put({
            type: COMMENT_LIKE_DELETE_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: COMMENT_LIKE_DELETE_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchCommentLikeDelete() {
    yield takeLatest(COMMENT_LIKE_DELETE_REQUEST, commentLikeDelete);
}