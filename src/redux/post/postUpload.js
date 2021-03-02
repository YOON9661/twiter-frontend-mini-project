import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// TYPE설정
export const POST_UPLOAD_REQUEST = "POST_UPLOAD_REQUEST";
export const POST_UPLOAD_SUCCESS = "POST_UPLOAD_SUCCESS";
export const POST_UPLOAD_FAILURE = "POST_UPLOAD_FAILURE";
export const POST_UPLOAD_INITIALIZE = "POST_UPLOAD_INITIALIZE";

export const POST_PREVIEW_REQUEST = "POST_PREVIEW_REQUEST";
export const POST_PREVIEW_SUCCESS = "POST_PREVIEW_SUCCESS";
export const POST_PREVIEW_FAILURE = "POST_PREVIEW_FAILURE";
export const POST_PREVIEW_INITIALIZE = "POST_PREVIEW_INITIALIZE";

// aciton 생성함수
export const postUploadRequest = createAction(POST_UPLOAD_REQUEST, data => data);
export const postPreviewRequest = createAction(POST_PREVIEW_REQUEST, data => data);


// initialState
const initialState = {
    isPostUploading: false,
    isPostUploaded: false,
    postUploadData: null,
    postUploadError: null,

    isPostPreviewing: false,
    isPostPreviewed: false,
    postPreviewData: null,
    postPreviewError: null
}

// login reducer
const postUpload = handleActions(
    {
        // login
        [POST_UPLOAD_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isPostUploading = true;
            })),
        [POST_UPLOAD_SUCCESS]: (state, { payload: postUploadData }) => (
            produce(state, draft => {
                draft.isPostUploading = false;
                draft.isPostUploaded = true;
                draft.postUploadData = postUploadData;
                draft.postUploadError = null;
            })),
        [POST_UPLOAD_FAILURE]: (state, { payload: postUploadError }) => (
            produce(state, draft => {
                draft.isPostUploading = false;
                draft.postUploadError = postUploadError;
            })),
        [POST_UPLOAD_INITIALIZE]: (state, action) => (
            produce(state, draft => {
                draft.isPostUploaded = false;
                draft.postUploadData = null;
            })),

        // logout
        [POST_PREVIEW_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isPostPreviewing = true;
            })),
        [POST_PREVIEW_SUCCESS]: (state, { payload: postPreviewData }) => (
            produce(state, draft => {
                draft.isPostPreviewing = false;
                draft.isPostPreviewed = true;
                draft.postPreviewData = postPreviewData;
                draft.postPreviewError = null;
            })),
        [POST_PREVIEW_FAILURE]: (state, { payload: postPreviewError }) => (
            produce(state, draft => {
                draft.isPostPreviewing = false;
                draft.postPreviewError = postPreviewError;
            })),
        [POST_PREVIEW_INITIALIZE]: (state, action) => (
            produce(state, draft => {
                draft.isPostPreviewed = false;
                draft.postPreviewData = null;
            })),
    },
    initialState
);

export default postUpload;