import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: {
    position: '',
    department: '',
    organization: '',
    user: '',
    direction: '',
    roomName: '',
    capacity: '',
    description: '',
  },
  create: '',
  create_room: false,
  invite_user: false,
  auth: false,
}

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,

  reducers: {
    setSearchAction: (state, action) => {
      const { search } = state
      const { position, department, organization, user, direction, roomName } = action.payload
      search.position = position
      search.department = department
      search.organization = organization
      search.user = user
      search.direction = direction
      search.roomName = roomName
      search.capacity = action.payload.capacity
      search.description = action.payload.description
    },
    refreshSearch: (state) => {
      const { search } = state
      search.position = ''
      search.department = ''
      search.organization = ''
      search.user = ''
      search.direction = ''
      search.roomName = ''
      search.capacity = ''
      search.description = ''
    },
    setCreate: (state, action) => {
      state.create = action.payload
    },
    setInviteUser: (state, action) => {
      state.invite_user = action.payload
    },
    setCreateRoom: (state, action) => {
      state.create_room = action.payload
    },
    setAuth: (state, action) => {
      state.auth = action.payload
    },
  },
})

export const { setSearchAction, setCreate, setInviteUser, setCreateRoom } = adminSlice.actions
export const { refreshSearch, setAuth } = adminSlice.actions
export default adminSlice.reducer
