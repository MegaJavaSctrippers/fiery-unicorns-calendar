import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import style from './Calendar.module.scss'
import icons from '../../assets/icons'
import CalendarHeader from '../CalendarHeader/CalendarHeader'
import CalendarItem from '../CalendarItem/CalendarItem'

function CalendarPage() {
  const week = useSelector((state) => state.date.week)
  const selectedDate = useSelector((state) => state.date.selectedDate)
  const dateType = useSelector((state) => state.date.dateType)

  const [hours] = useState([
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ])
  const weekHeader = week.map((item) => (
    <div key={item} className={style.week}>
      <CalendarHeader day={item} />
    </div>
  ))
  const dayHeader = <CalendarHeader day={selectedDate} />
  const calendarContent = hours.map((hour) => (
    <div className="d-flex align-items-center" key={hour}>
      <div className={style.hours}>{hour}</div>
      <CalendarItem hour={hour} />
    </div>
  ))
  return (
    <div className={style.calendar}>
      <div className={style.calendar_header}>
        <div className={style.clock_calendar}>
          <img src={icons.clockCalendarSVG} alt="" />
        </div>
        {dateType === 'date' ? dayHeader : weekHeader}
      </div>

      {/*  Calendar content schedule of meetings */}

      <div className={style.calendar_content}>{calendarContent}</div>
    </div>
  )
}

export default CalendarPage
