import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// TYPE설정
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

// aciton 생성함수
export const getPostsRequest = createAction(GET_POSTS_REQUEST, data => data);


// initialState
const initialState = {
    isGettingPosts: false,
    isPostsGetted: false,
    postsData: [],
    postsDataError: null
}

const getPosts = handleActions(
    {
        // login
        [GET_POSTS_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isGettingPosts = true;
            })),
        [GET_POSTS_SUCCESS]: (state, { payload: postsData }) => (
            produce(state, draft => {
                draft.isGettingPosts = false;
                draft.isPostsGetted = true;
                draft.postsData = postsData;
                draft.postsDataError = null;
            })),
        [GET_POSTS_FAILURE]: (state, { payload: postsDataError }) => (
            produce(state, draft => {
                draft.isGettingPosts = false;
                draft.postsDataError = postsDataError;
            }))
    },
    initialState
);

export default getPosts;