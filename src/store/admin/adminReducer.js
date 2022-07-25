import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: {
    position: '',
    department: '',
    organization: '',
    user: '',
    direction: '',
  },
  create: '',
  invite_user: '',
}

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,

  reducers: {
    setSearchAction: (state, action) => {
      const { search } = state
      const { position, department, organization, user, direction } = action.payload
      search.position = position
      search.department = department
      search.organization = organization
      search.user = user
      search.direction = direction
    },
    setCreate: (state, action) => {
      state.create = action.payload
    },
    setInviteUser: (state, action) => {
      state.invite_user = action.payload
    },
  },
})

export const { setSearchAction, setCreate, setInviteUser } = adminSlice.actions
export default adminSlice.reducer
