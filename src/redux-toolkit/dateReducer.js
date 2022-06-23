import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

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
      if (state.dateType === 'week') {
        const week = []
        const startWeek = moment(state.selectedDate).startOf('week').format()
        for (let i = 0; i < 7; i += 1) {
          week.push(moment(startWeek).add(i, 'days').format())
        }
        state.week = week
      }
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
      if (state.dateType === 'week') {
        const week = []
        const startWeek = moment(state.selectedDate).startOf('week').format()
        for (let i = 0; i < 7; i += 1) {
          week.push(moment(startWeek).add(i, 'days').format())
        }
        state.week = week
      }
    },
    addDate: (state) => {
      switch (state.dateType) {
        case 'date':
          state.selectedDate = moment(state.selectedDate).add(1, 'days').format()
          break
        case 'week':
          state.selectedDate = moment(state.selectedDate).add(1, 'week').format()
          if (state.dateType === 'week') {
            const week = []
            const startWeek = moment(state.selectedDate).startOf('week').format()
            for (let i = 0; i < 7; i += 1) {
              week.push(moment(startWeek).add(i, 'days').format())
            }
            state.week = week
          }
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
          if (state.dateType === 'week') {
            const week = []
            const startWeek = moment(state.selectedDate).startOf('week').format()
            for (let i = 0; i < 7; i += 1) {
              week.push(moment(startWeek).add(i, 'days').format())
            }
            state.week = week
          }
          break
        default:
          state.selectedDate = moment(state.selectedDate).subtract(1, 'month').format()
      }
    },
  },
})

export const { setDateType, setToday, setSelectedDate, addDate, subrtactDate } = dateSlice.actions
export default dateSlice.reducer
