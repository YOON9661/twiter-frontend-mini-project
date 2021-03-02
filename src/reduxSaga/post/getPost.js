import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILURE
} from "../../redux/post/"

export default function* getPostsSaga() {
    yield all([
        fork(watchGetPosts)
    ])
}

// login
function uploadAPI() {
    return axios.post("/post");
}
function* getPosts(action) {
    try {
        const result = yield call(uploadAPI);
        yield put({
            type: GET_POSTS_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: GET_POSTS_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchGetPosts() {
    yield takeLatest(GET_POSTS_REQUEST, getPosts);
}
