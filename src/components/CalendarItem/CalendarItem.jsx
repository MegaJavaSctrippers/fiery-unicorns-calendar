import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'
import style from './CalendarItem.module.scss'

function CalendarItem(props) {
  const week = useSelector((state) => state.date.week)
  const dateType = useSelector((state) => state.date.dateType)
  const selectedDate = useSelector((state) => state.date.selectedDate)
  const { hour } = props

  // Fake meetings data

  const [data] = useState([
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
      name: 'Romantic meeting with my third girlfriend',
      date: moment('2022-07-05').format('YYYY-MM-DD'),
      hours: '11:00',
    },
    {
      name: 'Conference with fiery unicorns team',
      date: moment('2022-07-16').format('YYYY-MM-DD'),
      hours: '10:00',
    },
  ])
  const calendarWeek = week.map((days) => (
    <div className={style.days} key={days}>
      {data.map((item) => (
        <span key={item.name}>
          {/* show meetings if the hour and date are the same */}
          {item.date === moment(days).format('YYYY-MM-DD') && item.hours === hour
            ? item.name
            : null}
        </span>
      ))}
    </div>
  ))
  const calendarDay = data.map((item) => (
    <span key={item.name}>
      {item.date === moment(selectedDate).format('YYYY-MM-DD') && item.hours === hour
        ? item.name
        : null}
    </span>
  ))
  return (
    <>
      {dateType === 'week' ? calendarWeek : <div className={style.single_days}>{calendarDay}</div>}
    </>
  )
}
CalendarItem.propTypes = {
  hour: PropTypes.string.isRequired,
}
export default CalendarItem
