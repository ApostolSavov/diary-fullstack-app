import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const defaultHeaders = {
  "Content-type": "application/json",
}

export const diaryApi = createApi({
  reducerPath: 'diaryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data,
        headers: {
          ...defaultHeaders
        },
      })
    })
  })
})

export const { useRegisterUserMutation } = diaryApi