import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../services";

const initialState = {
    posts: [],
    currentPost: null,
    leading: false,
    error: null,
    postFromAPI:null
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
);

const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {

        setCurrentPost: (state, action) => {
            state.currentPost = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.posts = action.payload
            state.loading = false
        })
        .addCase(getAll.rejected,(state, action) => {
            state.error = action.payload
            state.loading = false
        })
        .addCase(getAll.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getById.fulfilled,(state, action) => {
            state.postFromAPI = action.payload
        })



})


const {reducer: postReducer, actions: {setCurrentPost}} = postSlice;

const postActions = {
    getAll,
    setCurrentPost,
    getById
}
export {
    postReducer,
    postActions
}