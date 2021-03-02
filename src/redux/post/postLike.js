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

const postLike = handleActions(
    {
        // postlike
        [POST_LIKE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isLiking = true;
            })),
        [POST_LIKE_SUCCESS]: (state, { payload: likeData }) => (
            produce(state, draft => {
                draft.isLiking = false;
                draft.likeSuccess = true;
                draft.likeData = likeData
                draft.likeError = null;
            })),
        [POST_LIKE_FAILURE]: (state, { payload: likeError }) => (
            produce(state, draft => {
                draft.isLiking = false;
                draft.likeError = likeError;
            })),

        // postLikeDelete
        [POST_LIKE_DELETE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isDeletingLike = true;
            })),
        [POST_LIKE_DELETE_SUCCESS]: (state, { payload: likeDeleteData }) => (
            produce(state, draft => {
                draft.isDeletingLike = false;
                draft.deleteLikeSuccess = true;
                draft.likeDeleteData = likeDeleteData;
                draft.likeDeleteError = null;
            })),
        [POST_LIKE_DELETE_FAILURE]: (state, { payload: likeDeleteError }) => (
            produce(state, draft => {
                draft.isDeletingLike = false;
                draft.likeDeleteError = likeDeleteError;
            })),



    },
    initialState
);

export default postLike;