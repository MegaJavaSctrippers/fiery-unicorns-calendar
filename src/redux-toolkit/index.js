import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import dateReducer from './dateReducer'

export const store = configureStore({
  reducer: {
    date: dateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
