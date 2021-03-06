import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// get user
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";
export const GET_USER_INITIALIZE = "GET_USER_INITIALIZE";
export const getUserRequest = createAction(GET_USER_REQUEST, data => data);
export const getUserInitialize = createAction(GET_USER_INITIALIZE);

// follow / unfollow
export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";
export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
export const followRequest = createAction(FOLLOW_REQUEST, data => data);
export const unFollowRequest = createAction(UNFOLLOW_FAILURE, data => data);

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
    //get user
    isGettingUser: false,
    isUserGetted: false,
    userData: null,
    userDataError: null,

    // follow
    isFollowing: false,
    FollowingSuccess: false,
    FollowingError: null,

    // unfollow
    isUnFollowing: false,
    unFollowingSuccess: false,
    unFollowingError: null,

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
        // getUser
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
            })),

        // follow
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

        // unfollow 
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
            })),

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