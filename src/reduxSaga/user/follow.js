import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";


export default function* followSaga() {
    yield all([
        fork(watchFollow),
        fork(watchUnfollow)
    ])
}

// follow
function followAPI(data) {
    return axios.post("/user/:id/following", data);
}
function* follow(action) {
    try {
        const result = yield call(followAPI, action.payload);
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
function* watchFollow() {
    yield takeLatest(REGISTER_REQUEST, follow);
}

// unfollow
function unfollowAPI(data) {
    return axios.post("/user/:id/unfollowing", data);
}
function* unfollow(action) {
    try {
        const result = yield call(unfollowAPI, action.payload);
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
function* watchUnfollow() {
    yield takeLatest(REGISTER_REQUEST, unfollow);
}