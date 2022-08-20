import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'

export const getNotifications = createAsyncThunk(
  'notifications/getNotifications',
  async (_, { rejectWithValue }) => {
    try {
      let { data } = await api.get('/notification/')
      data = data.map((item) => ({ ...item, showUsers: false }))
      return data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
)
