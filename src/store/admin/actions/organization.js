import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../../services/api'

export const getOrganizations = createAsyncThunk(
  'organization/getOrganizations',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/organizations/')
      return data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
)

export const createOrganization = createAsyncThunk(
  'organization/createOrganization',
  async (data) => {
    await api.post('/organizations/', data)
  },
)
