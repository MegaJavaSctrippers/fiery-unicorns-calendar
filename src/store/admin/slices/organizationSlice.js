import { createSlice } from '@reduxjs/toolkit'
import { getOrganizations } from '../actions/organization'

const organizationSlice = createSlice({
  name: 'organization/organizationSlice',
  initialState: {
    organizations: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrganizations.fulfilled, (state, action) => {
      state.organizations = action.payload
    })
    builder.addCase(getOrganizations.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})

export default organizationSlice.reducer
