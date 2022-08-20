import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import dateReducer from './date/dateSlice'
import adminReducer from './slices/adminSlice'
import positionReducer from './slices/positionSlice'
import departmentReducer from './slices/departmentSlice'
import userReducer from './slices/userSlice'
import directionReducer from './slices/directionSlice'
import organizationReducer from './slices/organizationSlice'
import roomReducer from './slices/roomSlice'
import eventReducer from './slices/eventSlice'
import labelReducer from './slices/labelSlice'
import notificationReducer from './slices/notificationSlice'

export const store = configureStore({
  reducer: {
    date: dateReducer,
    admin: adminReducer,
    users: userReducer,
    positions: positionReducer,
    departments: departmentReducer,
    directions: directionReducer,
    organizations: organizationReducer,
    rooms: roomReducer,
    event: eventReducer,
    labels: labelReducer,
    notifications: notificationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
