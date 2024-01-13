import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AuthResponse, LocalUser } from 'app/common/types'
import { loadLocalUserData } from 'app/common/utils/authUtils'

const defaultHeaders = {
  "Content-type": "application/json",
}

export const diaryApi = createApi({
  reducerPath: 'diaryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    prepareHeaders: (headers) => {
      try {

        const userString = localStorage.getItem('user')
        const userData: LocalUser = userString && JSON.parse(userString)
        const token = userData?.token

        if (token) {
          headers.set('Authorization', `${token}`)
        }
      } catch (e) {
        console.log('Error parsing local storage')
      }
      //create util for getting this safely

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
    }),
    createEntry: builder.mutation({
      query: (data) => ({
        url: '/diary/create',
        method: 'POST',
        body: data,
        headers: {
          ...defaultHeaders
        }
      })
    })
  })
})

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useCreateEntryMutation
} = diaryApi