import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'

export const getLabels = createAsyncThunk('labels/getLabels', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/mark/')
    console.log(data, 'labels')
    return data
  } catch (e) {
    return rejectWithValue(e.message)
  }
})

// export const createLabel = createAsyncThunk('labels/createLabel', async (data) => {
//   await api.post('/mark/', data)
// })
