import { createSlice } from '@reduxjs/toolkit'
import { getDirections } from '../actions/directions'

const directionsSlice = createSlice({
  name: 'directions/directionsSlice',
  initialState: {
    directions: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDirections.fulfilled, (state, action) => {
      state.directions = action.payload
    })
    builder.addCase(getDirections.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})

export default directionsSlice.reducer
