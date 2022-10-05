import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {BrowserRouter} from "react-router-dom";


const userReducer = (state = {users: [], user: null}, action) => {
    switch (action.type) {
        case "LOAD_USERS":
            return {
                ...state,
                users: action.payload
            };

        default:
            return state;

    }


}


const postReducer = (state = {posts: [], post: null}, action) => {
    switch (action.type) {
        case "LOAD_POSTS":
            return {
                ...state,
                posts: action.payload
            };

        default:
            return state;

    }
}


const commentReducer = (state = {comments: [], comment: null}, action) => {
    switch (action.type) {
        case "LOAD_COMMENTS":
            return {
                ...state,
                comments: action.payload
            };

        default:
            return state;

    }
}

let reducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer
});


let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();