import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAILURE,
    POST_COMMENT_UPDATE_REQUEST,
    POST_COMMENT_UPDATE_SUCCESS,
    POST_COMMENT_UPDATE_FAILURE,
    POST_COMMENT_DELETE_REQUEST,
    POST_COMMENT_DELETE_SUCCESS,
    POST_COMMENT_DELETE_FAILURE
} from "../../redux/postRedux";


export default function* postCommentCrudSaga() {
    yield all([
        fork(watchPostComment),
        fork(watchPostCommentUpdate),
        fork(watchPostCommentDelete)
    ])
}

// upload
function postCommentAPI(PostId, comment) {
    return axios.post(`/post/${PostId}/comment`, { comment });
}
function* postComment(action) {
    try {
        const result = yield call(postCommentAPI, action.payload.PostId, action.payload.comment);
        if (!result) {
            return console.log("데이터 없다 ");
        }
        yield put({
            type: POST_COMMENT_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: POST_COMMENT_FAILURE,
            payload: "err.response.data"
        })
    }
}
function* watchPostComment() {
    yield takeLatest(POST_COMMENT_REQUEST, postComment);
}


// update
function postCommentUpdateAPI(data) {
    return axios.post("/post/:id/comment/update", data);
}
function* postCommentUpdate(action) {
    try {
        const result = yield call(postCommentUpdateAPI, action.payload);
        yield put({
            type: POST_COMMENT_UPDATE_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: POST_COMMENT_UPDATE_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchPostCommentUpdate() {
    yield takeLatest(POST_COMMENT_UPDATE_REQUEST, postCommentUpdate);
}


// delete
function postCommentDeleteAPI(PostId, CommentId) {
    return axios.delete(`/post/${PostId}/comment/${CommentId}/delete`);
}
function* postCommentDelete(action) {
    try {
        const result = yield call(
            postCommentDeleteAPI,
            action.payload.comment.PostId,
            action.payload.comment.id
        );
        yield put({
            type: POST_COMMENT_DELETE_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: POST_COMMENT_DELETE_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchPostCommentDelete() {
    yield takeLatest(POST_COMMENT_DELETE_REQUEST, postCommentDelete);
}