import { createSlice } from '@reduxjs/toolkit'
import { getPositions } from '../actions/positions'

const positionSlice = createSlice({
  name: 'position/positionSlice',
  initialState: {
    positions: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPositions.fulfilled, (state, action) => {
      state.positions = action.payload
    })
    builder.addCase(getPositions.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})

export default positionSlice.reducer
