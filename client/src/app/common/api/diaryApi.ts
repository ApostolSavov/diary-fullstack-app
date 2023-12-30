import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AuthResponse } from 'app/common/types'
import { loadLocalUserData } from 'app/common/utils/authUtils'

const defaultHeaders = {
  "Content-type": "application/json",
}

export const diaryApi = createApi({
  reducerPath: 'diaryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('user')
      //create util for getting this safely

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    },

  }),
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
        loadLocalUserData(data)
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
        loadLocalUserData(data)
      }
    })
  })
})

export const { useRegisterUserMutation, useLoginUserMutation } = diaryApi