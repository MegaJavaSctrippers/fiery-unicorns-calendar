import { createSlice } from '@reduxjs/toolkit'
import { getOrganizations } from '../actions/organization'

const organizationSlice = createSlice({
  name: 'organization/organizationSlice',
  initialState: {
    organizations: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getOrganizations.fulfilled.type]: (state, action) => {
      state.organizations = action.payload
    },
    [getOrganizations.rejected.type]: (state, action) => {
      state.error = action.payload
    },
  },
})

export default organizationSlice.reducer
