import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'

export const getEvents = createAsyncThunk('events/getEvents', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/event/')
    console.log(data, 'aaaaa')
    return data
  } catch (e) {
    return rejectWithValue(e.message)
  }
})
