import { createSlice } from '@reduxjs/toolkit'
import { getRooms } from '../actions/rooms'

const roomSlice = createSlice({
  name: 'user/userSlice',
  initialState: {
    rooms: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.rooms = action.payload
    })
    builder.addCase(getRooms.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})

export default roomSlice.reducer
