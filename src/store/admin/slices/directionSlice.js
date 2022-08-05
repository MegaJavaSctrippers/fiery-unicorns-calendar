import { createSlice } from '@reduxjs/toolkit'
import { getDirections } from '../actions/directions'

const directionsSlice = createSlice({
  name: 'directions/directionsSlice',
  initialState: {
    directions: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getDirections.fulfilled.type]: (state, action) => {
      state.directions = action.payload
    },
    [getDirections.rejected.type]: (state, action) => {
      state.error = action.payload
    },
  },
})

export default directionsSlice.reducer
