import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// TYPE설정
export const COMMENT_LIKE_REQUEST = "COMMENT_LIKE_REQUEST";
export const COMMENT_LIKE_SUCCESS = "COMMENT_LIKE_SUCCESS";
export const COMMENT_LIKE_FAILURE = "COMMENT_LIKE_FAILURE";

export const COMMENT_LIKE_DELETE_REQUEST = "COMMENT_LIKE_DELETE_REQUEST";
export const COMMENT_LIKE_DELETE_SUCCESS = "COMMENT_LIKE_DELETE_SUCCESS";
export const COMMENT_LIKE_DELETE_FAILURE = "COMMENT_LIKE_DELETE_FAILURE";


// aciton 생성함수
export const commentLikeRequest = createAction(POST_COMMENT_LIKE_REQUEST, data => data);
export const commentLikeDeleteRequest = createAction(COMMENT_LIKE_DELETE_REQUEST, data => data);


// initialState
const initialState = {
    isLikingComment: false,
    isCommentLiked: false,
    commentLikeData: null,
    commentLikeError: null,

    isDeletingCommentLike: false,
    isCommentLikeDeleted: false,
    CommentLikeDeleteData: null,
    CommentLikeDeleteError: null
}

const postCommentLike = handleActions(
    {
        // postCommentLike
        [COMMENT_LIKE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isLikingComment = true;
            })),
        [COMMENT_LIKE_SUCCESS]: (state, { payload: commentLikeData }) => (
            produce(state, draft => {
                draft.isLikingComment = false;
                draft.isCommentLiked = true;
                draft.commentLikeData = commentLikeData;
                draft.commentLikeError = null;
            })),
        [COMMENT_LIKE_FAILURE]: (state, { payload: commentLikeError }) => (
            produce(state, draft => {
                draft.isLikingComment = false;
                draft.commentLikeError = commentLikeError;
            })),

        // postCommentLikeDelete
        [COMMENT_LIKE_DELETE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isDeletingCommentLike = true;
            })),
        [COMMENT_LIKE_DELETE_SUCCESS]: (state, { payload: CommentLikeDeleteData }) => (
            produce(state, draft => {
                draft.isDeletingCommentLike = false;
                draft.isCommentLikeDeleted = true;
                draft.CommentLikeDeleteData = CommentLikeDeleteData;
                draft.CommentLikeDeleteError = null;
            })),
        [COMMENT_LIKE_DELETE_FAILURE]: (state, { payload: CommentLikeDeleteError }) => (
            produce(state, draft => {
                draft.isDeletingCommentLike = false;
                draft.CommentLikeDeleteError = CommentLikeDeleteError;
            }))
    },
    initialState
);

export default postCommentLike;