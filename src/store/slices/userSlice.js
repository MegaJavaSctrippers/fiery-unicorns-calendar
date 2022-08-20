import { createSlice } from '@reduxjs/toolkit'
import { getUsers, getUser } from '../actions/userAction'

const userSlice = createSlice({
  name: 'user/userSlice',
  initialState: {
    users: [],
    error: null,
    user: {},
  },
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled.type]: (state, action) => {
      state.users = action.payload
    },
    [getUsers.rejected.type]: (state, action) => {
      state.error = action.payload
    },
    [getUser.fulfilled.type]: (state, action) => {
      state.user = action.payload
    },
  },
})

export default userSlice.reducer
