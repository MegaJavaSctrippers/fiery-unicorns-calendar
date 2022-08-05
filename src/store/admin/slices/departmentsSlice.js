import { createSlice } from '@reduxjs/toolkit'
import { getDepartments } from '../actions/departments'

const departmentSlice = createSlice({
  name: 'department/departmentSlice',
  initialState: {
    departments: [],
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getDepartments.fulfilled.type]: (state, action) => {
      state.departments = action.payload
    },
    [getDepartments.rejected.type]: (state, action) => {
      state.error = action.payload
    },
  },
})

export default departmentSlice.reducer
