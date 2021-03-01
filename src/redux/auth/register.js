import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// TYPE설정
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

// aciton 생성함수
export const registerRequest = createAction(REGISTER_REQUEST, data => data);

// {data: {
//     email: jiwon@naver.com,
//     password: 123
// }}

// initialState
const initialState = {
    isRegistering: false,
    isRegistered: false,
    registerData: null,
    registerDataError: null
}

// login reducer
const register = handleActions(
    {
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

export default register;