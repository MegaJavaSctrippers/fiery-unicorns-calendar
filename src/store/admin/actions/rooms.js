import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../services/api'

export const getRooms = createAsyncThunk('rooms/getRooms', async (rooms, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/room/')
    return data
  } catch (e) {
    return rejectWithValue(e.message)
  }
})