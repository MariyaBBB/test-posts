import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'api/posts',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => 'posts/'
        }),

        getComments: build.query({
            query: (id) => `posts/${id}/comments`
        }),

        getUserPosts: build.query({
            query: (id) => `posts?userId=${id}`
        }),

        getUserData: build.query({
            query: (id) => `users/${id}`
        })
    })
});

export const { useGetPostsQuery, useGetCommentsQuery, useGetUserPostsQuery, useGetUserDataQuery } = postsApi
