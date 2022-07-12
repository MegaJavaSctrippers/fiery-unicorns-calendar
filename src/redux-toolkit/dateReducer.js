import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { setWeek } from './utils'

const initialState = {
  dateType: 'date',
  selectedDate: moment().format(),
  week: [],
  events: [
    {
      name: 'Romantic meeting with my first girlfriend',
      date: moment('2022-07-08').format('YYYY-MM-DD'),
      hours: '10:00',
    },
    {
      name: 'Romantic meeting with my second girlfriend',
      date: moment('2022-07-08').format('YYYY-MM-DD'),
      hours: '13:00',
    },
    {
      name: 'Romantic meeting with my fourth girlfriend',
      date: moment('2022-07-08').format('YYYY-MM-DD'),
      hours: '14:00',
    },
    {
      name: 'Romantic meeting with my fives girlfriend',
      date: moment('2022-07-08').format('YYYY-MM-DD'),
      hours: '16:00',
    },
    {
      name: 'Romantic meeting with my third girlfriend',
      date: moment('2022-07-12').format('YYYY-MM-DD'),
      hours: '11:00',
    },
    {
      name: 'Meetup with a team',
      date: moment('2022-07-20').format('YYYY-MM-DD'),
      hours: '11:00',
    },
    {
      name: 'Conference with fiery unicorns team',
      date: moment('2022-07-16').format('YYYY-MM-DD'),
      hours: '10:00',
    },
    {
      name: 'Megalab intern',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '10:00',
    },
    {
      name: 'Megalab team',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '12:00',
    },
    {
      name: 'Megalab person',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '12:00',
    },
    {
      name: 'Megalab teamlead',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '12:00',
    },
    {
      name: 'Megalab meetup',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '13:00',
    },
    {
      name: 'Megalab mountain',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '15:00',
    },
    {
      name: 'Football with friends',
      date: moment('2022-07-18').format('YYYY-MM-DD'),
      hours: '10:00',
    },
  ],
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
