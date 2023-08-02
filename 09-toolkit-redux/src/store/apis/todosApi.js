import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({
        //tomamos la url y concatenamos /todos
        getTodos: builder.query({
            query: () => '/todos'
        }),
        getTodo: builder.query({
            query: (todoId) => `/todos/${todoId}`
        })

    })

})

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;