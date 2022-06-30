import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { setWeek } from './utils'

const initialState = {
  dateType: 'date',
  selectedDate: moment().format(),
  week: [],
}

export const dateSlice = createSlice({
  name: 'dateSlice',
  initialState,
  reducers: {
    setDateType: (state, action) => {
      state.dateType = action.payload
      state.week = setWeek(state.dateType, state.selectedDate)
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
      state.week = setWeek(state.dateType, state.selectedDate)
    },
    addDate: (state) => {
      switch (state.dateType) {
        case 'date':
          state.selectedDate = moment(state.selectedDate).add(1, 'days').format()
          break
        case 'week':
          state.selectedDate = moment(state.selectedDate).add(1, 'week').format()
          state.week = setWeek(state.dateType, state.selectedDate)
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
          state.week = setWeek(state.dateType, state.selectedDate)
          break
        default:
          state.selectedDate = moment(state.selectedDate).subtract(1, 'month').format()
      }
    },
  },
})

export const { setDateType, setToday, setSelectedDate, addDate, subrtactDate } = dateSlice.actions
export default dateSlice.reducer
