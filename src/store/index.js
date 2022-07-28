import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import dateReducer from './date/dateReducer'
import adminReducer from './admin/adminReducer'

export const store = configureStore({
  reducer: {
    date: dateReducer,
    admin: adminReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
