import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../services/api'

export const getUsers = createAsyncThunk('users/getUsers', async (users, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/users/')
    return data
  } catch (e) {
    return rejectWithValue(e.message)
  }
})
