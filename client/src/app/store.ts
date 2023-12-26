import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { diaryApi } from 'app/common/api/diaryApi'

export const store = configureStore({
  reducer: {
    [diaryApi.reducerPath]: diaryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(diaryApi.middleware),
})

setupListeners(store.dispatch)