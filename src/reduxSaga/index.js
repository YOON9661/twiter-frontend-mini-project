import { all, fork } from "redux-saga/effects";
import axios from "axios";

import authSaga from "./auth";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3001";

export default function* rootSaga() {
    yield all([
        fork(authSaga)
    ]);
}