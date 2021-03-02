import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// TYPE설정
export const POST_COMMENT_REQUEST = "POST_COMMENT_REQUEST";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
export const POST_COMMENT_FAILURE = "POST_COMMENT_FAILURE";

export const POST_COMMENT_UPDATE_REQUEST = "POST_COMMENT_REQUEST";
export const POST_COMMENT_UPDATE_SUCCESS = "POST_COMMENT_SUCCESS";
export const POST_COMMENT_UPDATE_FAILURE = "POST_COMMENT_FAILURE";

export const POST_COMMENT_DELETE_REQUEST = "POST_COMMENT_REQUEST";
export const POST_COMMENT_DELETE_SUCCESS = "POST_COMMENT_SUCCESS";
export const POST_COMMENT_DELETE_FAILURE = "POST_COMMENT_FAILURE";

// aciton 생성함수
export const postCommentRequest = createAction(POST_COMMENT_REQUEST, data => data);
export const postCommentUpdateRequest = createAction(POST_COMMENT_UPDATE_REQUEST, data => data);
export const postCommentDeleteRequest = createAction(POST_COMMENT_DELETE_REQUEST);


// initialState
const initialState = {
    isUploadingComment: false,
    isCommentUploaded: false,
    commentData: null,
    commentDataError: null,

    isUpdatingComment: false,
    isCommentUpdated: false,
    commentUpdateData: null,
    commentUpdateError: null,

    isDeletingComment: false,
    isCommentDeleted: false,
    commentDeleteData: null,
    commentDeleteError: null
}

const postCommentCrud = handleActions(
    {
        // UPLOAD
        [POST_COMMENT_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isUploadingComment = true;
            })),
        [POST_COMMENT_SUCCESS]: (state, { payload: commentData }) => (
            produce(state, draft => {
                draft.isUploadingComment = false;
                draft.isCommentUpdated = true;
                draft.commentData = commentData;
                draft.commentDataError = null;
            })),
        [POST_COMMENT_FAILURE]: (state, { payload: commentDataError }) => (
            produce(state, draft => {
                draft.isUploadingComment = false;
                draft.commentDataError = commentDataError;
            })),

        // UPDATE
        [POST_COMMENT_UPDATE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isUpdatingComment = true;
            })),
        [POST_COMMENT_UPDATE_SUCCESS]: (state, { payload: commentUpdateData }) => (
            produce(state, draft => {
                draft.isUpdatingComment = false;
                draft.isCommentUploaded = true;
                draft.commentUpdateData = commentUpdateData;
                draft.commentUpdateError = null;
            })),
        [POST_COMMENT_UPDATE_FAILURE]: (state, { payload: commentUpdateError }) => (
            produce(state, draft => {
                draft.isUpdatingComment = false;
                draft.commentUpdateError = commentUpdateError;
            })),

        // DELETE
        [POST_COMMENT_DELETE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isDeletingComment = true;
            })),
        [POST_COMMENT_DELETE_SUCCESS]: (state, { payload: commentDeleteData }) => (
            produce(state, draft => {
                draft.isDeletingComment = false;
                draft.isCommentDeleted = true;
                draft.commentDeleteData = commentDeleteData;
                draft.commentDeleteError = null;
            })),
        [POST_COMMENT_DELETE_FAILURE]: (state, { payload: commentDeleteError }) => (
            produce(state, draft => {
                draft.isDeletingComment = false;
                draft.commentDeleteError = commentDeleteError;
            })),
    },
    initialState
);

export default postCommentCrud;