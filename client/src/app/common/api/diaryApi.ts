import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AuthResponse } from 'app/common/types'
import { loadUser } from 'app/common/utils/authUtils'

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
      }),
      transformResponse: (data: AuthResponse) => {
        loadUser(data)
      }
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
        headers: {
          ...defaultHeaders
        },
      }),
      transformResponse: (data: AuthResponse) => {
        loadUser(data)
      }
    })
  })
})

export const { useRegisterUserMutation, useLoginUserMutation } = diaryApi