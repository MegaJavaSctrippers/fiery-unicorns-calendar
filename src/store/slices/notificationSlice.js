import { createSlice } from '@reduxjs/toolkit'
import { getNotifications } from '../actions/notificationActions'

export const notificationSlice = createSlice({
  name: 'notificationSlice',
  initialState: {
    notifications: [],
    error: false,
    delegate: '',
  },
  reducers: {
    setDelegate: (state, action) => {
      state.delegate = action.payload
    },
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
export const { setDelegate } = notificationSlice.actions
export default notificationSlice.reducer
