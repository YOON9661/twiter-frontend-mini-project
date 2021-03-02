import { all, fork } from "redux-saga/effects";

import getPostsSaga from "./getPost";
import imagePreviewSaga from "./imagePreview";
import uploadSaga from "./upload";
import postUdSaga from "./postUd";
import postCommentCrudSaga from "./postCommentCrud";
import postCommentLikeSaga from "./postCommentLike";

export default function* postSaga() {
    yield all([
        fork(getPostsSaga),
        fork(imagePreviewSaga),
        fork(uploadSaga),
        fork(postUdSaga),
        fork(postCommentLikeSaga),
        fork(postCommentCrudSaga)
    ]);
}