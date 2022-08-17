import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'

export const getNotifications = createAsyncThunk(
  'notifications/getNotifications',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/notification/')
      console.log(data, 'dddddddd')
      return data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
)
