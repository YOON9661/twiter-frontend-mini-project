import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// TYPE설정
export const POST_UPDATE_REQUEST = "POST_UPDATE_REQUEST";
export const POST_UPDATE_SUCCESS = "POST_UPDATE_SUCCESS";
export const POST_UPDATE_FAILURE = "POST_UPDATE_FAILURE";

export const POST_DELETE_REQUEST = "POST_DELETE_REQUEST";
export const POST_DELETE_SUCCESS = "POST_DELETE_SUCCESS";
export const POST_DELETE_FAILURE = "POST_DELETE_FAILURE";

// aciton 생성함수
export const postUpdateRequest = createAction(POST_UPDATE_REQUEST, data => data);
export const postDeleteRequest = createAction(POST_DELETE_REQUEST);


// initialState
const initialState = {
    isUpdatingPost: false,
    isPostUpdated: false,
    updatePostData: null,
    updatePostError: null,

    isDeletingPost: false,
    isPostDeleted: false,
    deletePostData: null,
    deletePostError: null
}

// login reducer
const postUd = handleActions(
    {
        // login
        [POST_UPDATE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isUpdatingPost = true;
            })),
        [POST_UPDATE_SUCCESS]: (state, { payload: updatePostData }) => (
            produce(state, draft => {
                draft.isUpdatingPost = false;
                draft.isPostUpdated = true;
                draft.updatePostData = updatePostData;
                draft.updatePostError = null;
            })),
        [POST_UPDATE_FAILURE]: (state, { payload: updatePostError }) => (
            produce(state, draft => {
                draft.isUpdatingPost = false;
                draft.updatePostError = updatePostError;
            })),

        [POST_DELETE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isDeletingPost = false;
                draft.postUploadData = null;
            })),
        [POST_DELETE_SUCCESS]: (state, { payload: deletePostData }) => (
            produce(state, draft => {
                draft.isDeletingPost = false;
                draft.isPostDeleted = true;
                draft.deletePostData = deletePostData
                draft.deletePostError = null;
            })),
        [POST_DELETE_FAILURE]: (state, { payload: deletePostError }) => (
            produce(state, draft => {
                draft.isDeletingPost = false;
                draft.deletePostError = deletePostError;
            })),

    },
    initialState
);

export default postUd;