import { createSlice } from '@reduxjs/toolkit'
import { getNotifications } from './notificationActions'

export const notificationSlice = createSlice({
  name: 'notificationSlice',
  initialState: {
    notifications: [],
    error: false,
  },
  extraReducers: {
    [getNotifications.fulfilled.type]: (state, action) => {
      state.notifications = action.payload
    },
    [getNotifications.rejected.type]: (state, action) => {
      state.error = action.payload
    },
  },
})
export default notificationSlice.reducer
