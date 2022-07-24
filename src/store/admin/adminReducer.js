import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  create: '',
  searchPosition: '',
  searchDepartment: '',
  searchOrganization: '',
  searchUser: '',
  createUser: false,
  auth: false,
}

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,

  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload
    },
    setCreate: (state, action) => {
      state.create = action.payload
    },
    setPosition: (state, action) => {
      state.searchPosition = action.payload
    },
    setDepartment: (state, action) => {
      state.searchDepartment = action.payload
    },
    setOrganization: (state, action) => {
      state.searchOrganization = action.payload
    },
    setCreateUser: (state, action) => {
      state.createUser = action.payload
    },
    setSearchUser: (state, action) => {
      state.searchUser = action.payload
    },
  },
})

export const { setCreate, setPosition, setOrganization, setDepartment } = adminSlice.actions
export const { setCreateUser, setSearchUser, setAuth } = adminSlice.actions
export default adminSlice.reducer
