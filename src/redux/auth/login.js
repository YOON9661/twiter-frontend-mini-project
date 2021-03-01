import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// TYPE설정
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

// aciton 생성함수
export const loginRequest = createAction(LOGIN_REQUEST, data => data);

// {
//     type: 'LOGIN_REQUEST',
//     payload: {
//       email: 'yjw5207@naver.com',
//       password: '123'
//     }
// }

// initialState
const initialState = {
    isLoggingIn: false,
    isLoggedIn: false,
    loginData: null,
    loginDataError: null,

    isLoggingOut: false,
    isLoggedOut: false,
    logoutError: null
}

// login reducer
const login = handleActions(
    {
        // login
        [LOGIN_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isLoggingIn = true;
            })),
        [LOGIN_SUCCESS]: (state, { data }) => (
            produce(state, draft => {
                draft.isLoggingIn = false;
                draft.isLoggedIn = true;
                draft.loginData = data;
                draft.loginDataError = null;
            })),
        [LOGIN_FAILURE]: (state, { data }) => (
            produce(state, draft => {
                draft.isLoggingIn = false;
                draft.loginDataError = data;
            })),

        // logout
        [LOGOUT_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isLoggingOut = true;
            })),
        [LOGOUT_SUCCESS]: (state, action) => (
            produce(state, draft => {
                draft.isLoggingOut = false;
                draft.isLoggedOut = true;
                draft.loginData = null;
                draft.logoutError = null;
            })),
        [LOGOUT_FAILURE]: (state, { payload: logoutError }) => (
            produce(state, draft => {
                draft.isLoggingOut = false;
                draft.logoutError = logoutError;
            }))
    },
    initialState
);

export default login;