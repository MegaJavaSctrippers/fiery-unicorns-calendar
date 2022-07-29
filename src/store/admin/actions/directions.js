import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../services/api'

export const getDirections = createAsyncThunk(
  'directions/getDirections',
  async (d, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/directions/')
      return data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
)
