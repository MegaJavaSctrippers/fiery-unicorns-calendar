import { createSlice } from '@reduxjs/toolkit'
import { getPositions } from '../actions/positionAction'

const positionSlice = createSlice({
  name: 'position/positionSlice',
  initialState: {
    positions: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getPositions.fulfilled.type]: (state, action) => {
      state.positions = action.payload
    },
    [getPositions.rejected.type]: (state, action) => {
      state.error = action.payload
    },
  },
})

export default positionSlice.reducer
