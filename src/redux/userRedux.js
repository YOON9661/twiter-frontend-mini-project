import { createAction, handleActions } from "redux-actions";
import produce from "immer";


// login / logout
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const loginRequest = createAction(LOGIN_REQUEST, data => data);
export const logoutRequest = createAction(LOGOUT_REQUEST);

// register
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const registerRequest = createAction(REGISTER_REQUEST, data => data);

// initialState
const initialState = {
    // login
    isLoggingIn: false,
    isLoggedIn: false,
    loginData: null,
    loginDataError: null,

    // logout
    isLoggingOut: false,
    isLoggedOut: false,
    logoutError: null,

    // register
    isRegistering: false,
    isRegistered: false,
    registerData: null,
    registerDataError: null
}

const userReducer = handleActions(
    {
        // login
        [LOGIN_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isLoggingIn = true;
            })),
        [LOGIN_SUCCESS]: (state, { payload: loginData }) => (
            produce(state, draft => {
                draft.isLoggingIn = false;
                draft.isLoggedIn = true;
                draft.loginData = loginData;
                draft.loginDataError = null;
            })),
        [LOGIN_FAILURE]: (state, { payload: loginDataError }) => (
            produce(state, draft => {
                draft.isLoggingIn = false;
                draft.loginDataError = loginDataError;
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
                draft.isLoggedIn = false;
                draft.loginData = null;
                draft.logoutError = null;
            })),
        [LOGOUT_FAILURE]: (state, { payload: logoutError }) => (
            produce(state, draft => {
                draft.isLoggingOut = false;
                draft.logoutError = logoutError;
            })),

        // register
        [REGISTER_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isRegistering = true;
            })),
        [REGISTER_SUCCESS]: (state, { payload: registerData }) => (
            produce(state, draft => {
                draft.isRegistering = false;
                draft.isRegistered = true;
                draft.registerData = registerData;
                draft.registerDataError = null;
            })),
        [REGISTER_FAILURE]: (state, { payload: registerError }) => (
            produce(state, draft => {
                draft.isRegistering = false;
                draft.registerDataError = registerError;
            })),
    },
    initialState
);

export default userReducer;