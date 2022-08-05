import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from '../actions/users'

const userSlice = createSlice({
  name: 'user/userSlice',
  initialState: {
    users: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled.type]: (state, action) => {
      state.users = action.payload
    },
    [getUsers.rejected.type]: (state, action) => {
      state.error = action.payload
    },
  },
})

export default userSlice.reducer
