import { createSlice } from '@reduxjs/toolkit'
import { getDepartments } from '../actions/departments'

const departmentSlice = createSlice({
  name: 'department/departmentSlice',
  initialState: {
    departments: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDepartments.fulfilled, (state, action) => {
      state.departments = action.payload
    })
    builder.addCase(getDepartments.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})

export default departmentSlice.reducer
