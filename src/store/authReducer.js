import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('token'),
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
  },
})
export const { setIsLoggedIn } = authSlice.actions
export default authSlice.reducer
