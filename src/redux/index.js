import { combineReducers } from "redux";

// auth
import login from "./auth/login";
import register from "./auth/register"

// user
import follow from "./user/follow";
import getUser from "./user/getUser"

// post
import postUpload from "./post/postUpload";
import postUd from "./post/postUd";
import postLike from "./post/postLike";
import postCommentLike from "./post/postCommentLike";
import postCommentCrud from "./post/postCommentCrud";
import postRetweet from "./post/postRetweet";
import getPosts from "./post/getPosts";


// rootreducer
const rootReducer = combineReducers({
    login,
    register,
    getUser,
    follow,
    // post
    getPosts,
    postUpload,
    postUd,
    postLike,
    postCommentLike,
    postCommentCrud,
    postRetweet
});

export default rootReducer;