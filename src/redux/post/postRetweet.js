import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// TYPE설정
export const POST_RETWEET_REQUEST = "POST_RETWEET_REQUEST";
export const POST_RETWEET_SUCCESS = "POST_RETWEET_SUCCESS";
export const POST_RETWEET_FAILURE = "POST_RETWEET_FAILURE";

// aciton 생성함수
export const postRetweetRequest = createAction(POST_RETWEET_REQUEST, data => data);


// initialState
const initialState = {
    isRetweetingPost: false,
    isPostRetweeted: false,
    retweetPostData: null,
    retweetPostError: null
}

const postRetweet = handleActions(
    {
        // login
        [POST_RETWEET_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isRetweetingPost = true;
            })),
        [POST_RETWEET_SUCCESS]: (state, { payload: retweetPostData }) => (
            produce(state, draft => {
                draft.isRetweetingPost = false;
                draft.isPostRetweeted = true;
                draft.retweetPostData = retweetPostData;
                draft.retweetPostError = null;
            })),
        [POST_RETWEET_FAILURE]: (state, { payload: retweetPostError }) => (
            produce(state, draft => {
                draft.isRetweetingPost = false;
                draft.retweetPostError = retweetPostError;
            }))
    },
    initialState
);

export default postRetweet;