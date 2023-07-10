import { createSlice } from "@reduxjs/toolkit";

export const sortedSlice = createSlice({
    name: 'sorted',
    initialState: {
        posts: [],
        filteredPosts: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
            state.filteredPosts = action.payload;
        },

        sortPosts: (state, action) => {
            const { field, order } = action.payload;
            state.posts.sort((a, b) => {
              if (order === 'asc') {
                return a[field] > b[field] ? 1 : -1;
              } else {
                return a[field] > b[field] ? -1 : 1;
              }
            })
        },

        filterPosts: (state, action) => {
            const { toSearch } = action.payload;

            state.filteredPosts = state.posts.filter(el =>  {
                if(el.title.includes(toSearch)) return true;
                else return false;
             })
               
           
        }
    }
})

export const postsReducers = sortedSlice.reducer;
export const { setPosts, sortPosts, filterPosts } = sortedSlice.actions
