import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = {
  dateType: 'date',
  selectedDate: moment().format(),
}

export const dateSlice = createSlice({
  name: 'dateSlice',
  initialState,
  reducers: {
    setDateType: (state, action) => {
      state.dateType = action.payload
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
    },
    addDate: (state) => {
      switch (state.dateType) {
        case 'date':
          state.selectedDate = moment(state.selectedDate).add(1, 'days').format()
          break
        case 'week':
          state.selectedDate = moment(state.selectedDate).add(1, 'week').format()
          break
        default:
          state.selectedDate = moment(state.selectedDate).add(1, 'month').format()
      }
    },
    subrtactDate: (state) => {
      switch (state.dateType) {
        case 'date':
          state.selectedDate = moment(state.selectedDate).subtract(1, 'days').format()
          break
        case 'week':
          state.selectedDate = moment(state.selectedDate).subtract(1, 'week').format()
          break
        default:
          state.selectedDate = moment(state.selectedDate).subtract(1, 'month').format()
      }
    },
  },
})

export const { setDateType, setToday, setSelectedDate, addDate, subrtactDate } = dateSlice.actions
export default dateSlice.reducer
