import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices";

const rootReduser = combineReducers({
    userReducer
})


const setupStore = () => configureStore({
    reducer: rootReduser
});

export {
    setupStore
}

