import { createSlice } from '@reduxjs/toolkit'
import { getRooms } from '../actions/roomAction'

const roomSlice = createSlice({
  name: 'user/userSlice',
  initialState: {
    rooms: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getRooms.fulfilled.type]: (state, action) => {
      state.rooms = action.payload
    },
    [getRooms.rejected.type]: (state, action) => {
      state.error = action.payload
    },
  },
})

export default roomSlice.reducer
