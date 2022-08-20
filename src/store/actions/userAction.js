import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'

export const getUsers = createAsyncThunk('users/getUsers', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/users/')
    return data
  } catch (e) {
    return rejectWithValue(e.message)
  }
})

export const getUser = createAsyncThunk('users/getUser', async (_, { rejectWithValue }) => {
  try {
    const id = JSON.parse(localStorage.getItem('user'))
    const { data } = await api.get(`/users/${id}/`)
    return data
  } catch (e) {
    return rejectWithValue(e.message)
  }
})

// export const inviteUsers = createAsyncThunk('users/inviteUsers', async (data) => {
//   await api.post('/sendinvitation/', data)
// })
