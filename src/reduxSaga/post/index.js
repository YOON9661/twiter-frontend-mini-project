import { all, fork } from "redux-saga/effects";

import getPostsSaga from "./getPost";
import imagePreviewSaga from "./imagePreview";
import uploadSaga from "./upload";
import postUdSaga from "./postUd";
import postLikeSaga from "./postLike";
import postRetweetSaga from "./postRetweet";
import postCommentCrudSaga from "./postCommentCrud";
import postCommentLikeSaga from "./postCommentLike";

export default function* postSaga() {
    yield all([
        fork(getPostsSaga),
        fork(imagePreviewSaga),
        fork(uploadSaga),
        fork(postUdSaga),
        fork(postLikeSaga),
        fork(postRetweetSaga),
        fork(postCommentLikeSaga),
        fork(postCommentCrudSaga)
    ]);
}