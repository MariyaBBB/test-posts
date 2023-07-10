import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { postsApi } from "./posts.api";
import { postsReducers } from "./slice";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        posts: postsReducers
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(postsApi.middleware)
})

