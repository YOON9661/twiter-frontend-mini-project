import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// TYPE설정
export const GET_USER_REQUEST = "POST_LIKE_REQUEST";
export const GET_USER_SUCCESS = "POST_LIKE_SUCCESS";
export const GET_USER_FAILURE = "POST_LIKE_FAILURE";
export const GET_USER_INITIALIZE = "GET_USER_INITIALIZE";

// aciton 생성함수
export const getUserRequest = createAction(GET_USER_REQUEST, data => data);
export const getUserInitialize = createAction(GET_USER_INITIALIZE);


// initialState
const initialState = {
    isGettingUser: false,
    isUserGetted: false,
    userData: null,
    userDataError: null
}

// login reducer
const getUser = handleActions(
    {
        // login
        [GET_USER_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isGettingUser = true;
            })),
        [GET_USER_SUCCESS]: (state, { payload: userData }) => (
            produce(state, draft => {
                draft.isGettingUser = false;
                draft.isUserGetted = true;
                draft.userData = userData;
                draft.userDataError = null;
            })),
        [GET_USER_FAILURE]: (state, { payload: userDataError }) => (
            produce(state, draft => {
                draft.isGettingUser = false;
                draft.userDataError = userDataError;
            })),
        [GET_USER_INITIALIZE]: (state, action) => (
            produce(state, draft => {
                draft.isUserGetted = false;
                draft.userData = null;
            }))

    },
    initialState
);

export default getUser;