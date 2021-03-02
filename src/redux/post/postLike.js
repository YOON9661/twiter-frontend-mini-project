import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// TYPE설정
export const POST_LIKE_REQUEST = "POST_LIKE_REQUEST";
export const POST_LIKE_SUCCESS = "POST_LIKE_SUCCESS";
export const POST_LIKE_FAILURE = "POST_LIKE_FAILURE";

export const POST_LIKE_DELETE_REQUEST = "POST_LIKE_DELETE_REQUEST";
export const POST_LIKE_DELETE_SUCCESS = "POST_LIKE_DELETE_SUCCESS";
export const POST_LIKE_DELETE_FAILURE = "POST_LIKE_DELETE_FAILURE";

// aciton 생성함수
export const postLikeRequest = createAction(POST_LIKE_REQUEST, data => data);
export const postLikeDeleteRequest = createAction(POST_LIKE_DELETE_REQUEST, data => data);


// initialState
const initialState = {
    isLiking: false,
    likeSuccess: false,
    likeData: null,
    likeError: null,

    isDeletingLike: false,
    deleteLikeSuccess: false,
    likeDeleteData: null,
    likeDeleteError: null
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
            }))

    },
    initialState
);

export default postUpload;