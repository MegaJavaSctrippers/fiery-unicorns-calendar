import { createSlice } from '@reduxjs/toolkit'
import { getEvents, getFreeRoomAndUsers } from './eventAction'

export const eventSlice = createSlice({
  name: 'eventSlice',
  initialState: {
    events: [],
    freeRooms: [],
    freeUsers: [],
    error: false,
    label: '',
  },
  reducers: {
    setLabel: (state, action) => {
      state.label = action.payload
    },
    setFreeRoom: (state, action) => {
      state.freeRooms = action.payload
      state.freeUsers = action.payload
    },
  },
  extraReducers: {
    [getEvents.fulfilled.type]: (state, action) => {
      state.events = action.payload
    },
    [getEvents.rejected.type]: (state, action) => {
      state.error = action.payload
    },
    [getFreeRoomAndUsers.fulfilled.type]: (state, action) => {
      state.freeRooms = action.payload.free_rooms
      state.freeUsers = action.payload.users
    },
  },
})

export const { setLabel, setFreeRoom } = eventSlice.actions
export default eventSlice.reducer
