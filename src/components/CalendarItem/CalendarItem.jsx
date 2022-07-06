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
      name: 'Romantic meeting with my second girlfriend',
      date: moment('2022-07-01').format('YYYY-MM-DD'),
      hours: '10:00',
    },
    {
      name: 'Job meeting',
      date: moment('2022-06-14').format('YYYY-MM-DD'),
      hours: '13:00',
    },
    {
      name: 'Romantic meeting with my third girlfriend',
      date: moment('2022-06-29').format('YYYY-MM-DD'),
      hours: '11:00',
    },
    {
      name: 'Conference with collegas',
      date: moment('2022-06-16').format('YYYY-MM-DD'),
      hours: '10:00',
    },
    {
      name: 'Meeting with a team in megalab',
      date: moment('2022-06-25').format('YYYY-MM-DD'),
      hours: '11:00',
    },
    {
      name: 'Romantic evening with my girlfriend',
      date: moment('2022-06-15').format('YYYY-MM-DD'),
      hours: '12:00',
    },
    {
      name: 'Interview in megacom',
      date: moment('2022-06-20').format('YYYY-MM-DD'),
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
