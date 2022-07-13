import { configureStore } from "@reduxjs/toolkit";
import { likeReducer } from "./Reducers/PostReducers";
import { allUsersReducer, getPostsReducer, userReducer } from "./Reducers/UserReducer";
const initialState = {};
const store = configureStore({
    reducer : {
        user : userReducer,
        getPosts : getPostsReducer,
        allUsers: allUsersReducer,
        like: likeReducer,
    }
});

export default store