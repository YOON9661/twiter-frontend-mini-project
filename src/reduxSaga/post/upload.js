import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";


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
function* watchUpload() {
    yield takeLatest(REGISTER_REQUEST, upload);
}
