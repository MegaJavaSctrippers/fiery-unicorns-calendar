import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'

export const getDepartments = createAsyncThunk(
  'departments/getDepartments',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/departments/')
      return data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
)
