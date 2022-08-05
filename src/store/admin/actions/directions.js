import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../services/api'

export const getDirections = createAsyncThunk(
  'directions/getDirections',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/directions/')
      return data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
)

export const createDirections = createAsyncThunk('position/createPosition', async (data) => {
  await api.post('/create/directions/', data)
})
