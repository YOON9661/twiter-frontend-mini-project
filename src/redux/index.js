import { combineReducers } from "redux";

import login from "./auth/login";
import register from "./auth/register"
import follow from "./user/follow";
import postUpload from "./post/postUpload";

// rootreducer
const rootReducer = combineReducers({
    login,
    register,
    follow,
    postUpload
});

export default rootReducer;