import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
    POST_PREVIEW_REQUEST,
    POST_PREVIEW_SUCCESS,
    POST_PREVIEW_FAILURE
} from "../../redux/postRedux";

export default function* imagePreviewSaga() {
    yield all([
        fork(watchImagePreview)
    ])
}

// login
function imagePreviewAPI(data) {
    return axios.post("/post/img", data);
}
function* imagePreview(action) {
    try {
        const result = yield call(imagePreviewAPI, action.payload);
        yield put({
            type: POST_PREVIEW_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: POST_PREVIEW_FAILURE,
            payload: err.response.data
        })
    }
}
function* watchImagePreview() {
    yield takeLatest(POST_PREVIEW_REQUEST, imagePreview);
}
