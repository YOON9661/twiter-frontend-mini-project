import { combineReducers } from "redux";

// user
import userReducer from "./userRedux";

// post
import postReducer from "./postRedux";

// rootreducer
const rootReducer = combineReducers({
    userReducer,
    postReducer
});

export default rootReducer;