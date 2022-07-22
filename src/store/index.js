import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import dateReducer from './date/dateReducer'
import adminReducer from './admin/adminReducer'
import authReducer from './authReducer'

export const store = configureStore({
  reducer: {
    date: dateReducer,
    admin: adminReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
