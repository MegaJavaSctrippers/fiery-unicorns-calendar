import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  create: '',
  searchPosition: '',
  searchDepartment: '',
  searchOrganization: '',
  searchUser: '',
  createUser: false,
  createRoom: false,
  delDepartment: 'notall',
}

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,

  reducers: {
    setDelDepartment: (state, action) => {
      state.delDepartment = action.payload
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
    setCreateRoom: (state, action) => {
      state.createRoom = action.payload
    },
    setSearchUser: (state, action) => {
      state.searchUser = action.payload
    },
  },
})

export const { setCreate, setPosition, setOrganization, setDepartment } = adminSlice.actions
export const { setCreateUser, setSearchUser, setDelDepartment, setCreateRoom } = adminSlice.actions
export default adminSlice.reducer
