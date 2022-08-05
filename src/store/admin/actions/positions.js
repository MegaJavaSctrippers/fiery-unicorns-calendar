import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../services/api'

export const getPositions = createAsyncThunk(
  'positions/getPositions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/positions/')
      return data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
)

export const createPosition = createAsyncThunk('position/createPosition', async (data) => {
  await api.post('/create/positions/', data)
})
