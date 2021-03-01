import { all, fork } from "redux-saga/effects";

import loginSaga from "./loginSaga";
import registerSaga from "./registerSaga";

export default function* authSaga() {
    yield all([
        fork(registerSaga),
        fork(loginSaga)
    ]);
}