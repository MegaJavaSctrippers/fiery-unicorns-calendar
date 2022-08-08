import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import dateReducer from './date/dateSlice'
import adminReducer from './adminSlice'
import positionReducer from './admin/slices/positionSlice'
import departmentReducer from './admin/slices/departmentsSlice'
import userReducer from './admin/slices/usersSlice'
import directionReducer from './admin/slices/directionSlice'
import organizationReducer from './admin/slices/organizationSlice'
import roomReducer from './admin/slices/roomSlice'
import eventReducer from './event/eventSlice'

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
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
