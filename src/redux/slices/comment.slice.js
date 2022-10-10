import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentsService} from "../../services";

const initialState = {
    comments: [],
    currentComment: null,
    leading: false,
    error: null,
    commentFromAPI:null
};

const getAll = createAsyncThunk(
    'commentSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await commentsService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
);

const getById = createAsyncThunk(
    'commentSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await commentsService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.comments = action.payload
        // },
        setCurrentComment: (state, action) => {
            state.currentComment = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.comments = action.payload
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
            state.commentFromAPI = action.payload
        })



})


const {reducer: commentReducer, actions: {setCurrentComment}} = commentSlice;

const commentActions = {
    getAll,
    setCurrentComment,
    getById
}
export {
    commentReducer,
    commentActions

}