import { createSlice } from '@reduxjs/toolkit'
import { getLabels } from '../actions/labelAction'

export const labelSlice = createSlice({
  name: 'labelSlice',
  initialState: {
    labels: [],
    error: false,
  },
  extraReducers: {
    [getLabels.fulfilled.type]: (state, action) => {
      state.labels = action.payload
    },
    [getLabels.rejected.type]: (state, action) => {
      state.error = action.payload
    },
  },
})

export default labelSlice.reducer
