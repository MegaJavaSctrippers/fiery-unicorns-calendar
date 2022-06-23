import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import style from './Calendar.module.scss'
import icons from '../../assets/icons'

function CalendarPage() {
  const week = useSelector((state) => state.date.week)
  const selectedDate = useSelector((state) => state.date.selectedDate)
  const dateType = useSelector((state) => state.date.dateType)

  const [days, setDays] = useState([
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
  return (
    <div className={style.calendar}>
      <div className={style.calendar_header}>
        <div className={style.clock_calendar}>
          <img src={icons.clockCalendar} alt="" />
        </div>
        {dateType === 'date' ? (
          <div className={style.day}>
            <h4>{moment(selectedDate).format('dd')}</h4>
            <span>{moment(selectedDate).format('D')}</span>
          </div>
        ) : (
          week.map((item) => (
            <div key={item} className={style.week}>
              <h4>{moment(item).format('dd')}</h4>
              <span>{moment(item).format('D')}</span>
            </div>
          ))
        )}
      </div>
      <div className={style.calendar_content}>
        {days.map((hours) => (
          <div className="d-flex align-items-center" key={hours}>
            <div className={style.hours}>{hours}</div>
            {dateType === 'week' ? (
              week.map((days) => <div className={style.days} key={days} />)
            ) : (
              <div className={style.single_days} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarPage
