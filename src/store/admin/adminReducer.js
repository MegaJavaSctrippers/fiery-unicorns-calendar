import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  create: 'position',
}

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,

  reducers: {
    setCreate: (state, action) => {
      state.create = action.payload
    },
  },
})

export const { setCreate } = adminSlice.actions
export default adminSlice.reducer
