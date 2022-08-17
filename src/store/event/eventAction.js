import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'

export const getEvents = createAsyncThunk('events/getEvents', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get('/event/')
    return data
  } catch (e) {
    return rejectWithValue(e.message)
  }
})

export const getFreeRoomAndUsers = createAsyncThunk(
  'events/getFreeRoomAndUsers',
  async (event, value) => {
    try {
      const { data } = await api.get(
        `/free-room/?date=${event.event_date[0]}&time=${event.start}&repetition=${value}&repetitions_count=${event.repetitions_count}`,
      )
      console.log(event, 'evnt')
      console.log(data, 'ppppppppppppp')
      return data
    } catch (e) {
      return e.message
    }
  },
)

// export const createEvent = createAsyncThunk('events/createEvent', async (data) => {
//   const invites = data.invitees.map((item) => item.id)
//   await api.post('/event/', { ...data, invitees: invites }).then(() => {
//     getEvents()
//   })
// })
