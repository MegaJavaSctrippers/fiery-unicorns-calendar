import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from '../actions/users'

const userSlice = createSlice({
  name: 'user/userSlice',
  initialState: {
    users: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})

export default userSlice.reducer
