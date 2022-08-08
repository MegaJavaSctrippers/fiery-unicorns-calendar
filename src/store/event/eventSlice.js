import { createSlice } from '@reduxjs/toolkit'
import { getEvents } from './eventAction'

export const eventSlice = createSlice({
  name: 'eventSlice',
  initialState: {
    events: [],
    error: false,
  },
  extraReducers: {
    [getEvents.fulfilled.type]: (state, action) => {
      state.events = action.payload
    },
    [getEvents.rejected.type]: (state, action) => {
      state.error = action.payload
    },
  },
})

export default eventSlice.reducer
