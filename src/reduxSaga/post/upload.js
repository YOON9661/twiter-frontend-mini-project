import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
    POST_UPLOAD_REQUEST,
    POST_UPLOAD_SUCCESS,
    POST_UPLOAD_FAILURE
} from "../../redux/post/postUpload";

export default function* uploadSaga() {
    yield all([
        fork(watchUpload)
    ])
}

// login
function uploadAPI(data) {
    return axios.post("/post/upload", data);
}
function* upload(action) {
    try {
        const result = yield call(uploadAPI, action.payload);
        yield put({
            type: POST_UPLOAD_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: POST_UPLOAD_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchUpload() {
    yield takeLatest(POST_UPLOAD_REQUEST, upload);
}
