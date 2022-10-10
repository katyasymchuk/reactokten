import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {commentReducer, postReducer, userReducer} from "./slices";




const rootReduser = combineReducers({
    userReducer,
    postReducer,
    commentReducer
})


const setupStore = () => configureStore({
    reducer: rootReduser
});

export {
    setupStore
}

