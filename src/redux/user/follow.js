import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// TYPE설정
export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";
export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";

// aciton 생성함수
export const followRequest = createAction(FOLLOW_REQUEST, data => data);
export const unFollowRequest = createAction(UNFOLLOW_FAILURE, data => data);
// {
//     type: 'LOGIN_REQUEST',
//     payload: {
//       email: 'yjw5207@naver.com',
//       password: '123'
//     }
// }

// initialState
const initialState = {
    isFollowing: false,
    FollowingSuccess: false,
    FollowingError: null,

    isUnFollowing: false,
    unFollowingSuccess: false,
    unFollowingError: null
}

// login reducer
const follow = handleActions(
    {
        // login
        [FOLLOW_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isFollowing = true;
            })),
        [FOLLOW_SUCCESS]: (state, { data }) => (
            produce(state, draft => {
                draft.isFollowing = false;
                draft.FollowingSuccess = true;
                draft.FollowingError = null;
            })),
        [FOLLOW_FAILURE]: (state, { payload: FollowingError }) => (
            produce(state, draft => {
                draft.isFollowing = false;
                draft.FollowingError = FollowingError;
            })),

        // logout
        [UNFOLLOW_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isUnFollowing = true;
            })),
        [UNFOLLOW_SUCCESS]: (state, action) => (
            produce(state, draft => {
                draft.isUnFollowing = false;
                draft.unFollowingSuccess = true;
                draft.unFollowingError = null;
            })),
        [UNFOLLOW_FAILURE]: (state, { payload: unFollowingError }) => (
            produce(state, draft => {
                draft.isUnFollowing = false;
                draft.unFollowingError = unFollowingError;
            }))
    },
    initialState
);

export default follow;