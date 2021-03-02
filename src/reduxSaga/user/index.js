import { all, fork } from "redux-saga/effects";

import followSaga from "./follow"
import userGetSaga from "./userGet";

export default function* userSaga() {
    yield all([
        fork(followSaga),
        fork(userGetSaga)
    ]);
}