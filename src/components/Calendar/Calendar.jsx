import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Calendar } from 'antd'
import locale from 'antd/es/date-picker/locale/ru_RU'
import moment from 'moment'
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
  console.log(selectedDate, 'hhhhhhhhhhhhhhhhhhhhh')
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

  const weekHeader = week.map((item) => (
    <div key={item} className={style.week}>
      <CalendarHeader day={item} />
    </div>
  ))
  const dayHeader = (
    <div className={style.day}>
      <CalendarHeader day={selectedDate} />
    </div>
  )

  const calendarContent = hours.map((hour) => (
    <div className="d-flex align-items-center" key={hour}>
      <div className={style.hours}>{hour}</div>
      <CalendarItem hour={hour} />
    </div>
  ))

  const dateCellRender = (value) => {
    if (value) {
      return data.map((item) => {
        if (item.date === moment(value).format('YYYY-MM-DD')) {
          return (
            <div className={style.event_name} key={item.name}>
              <span className={style.label} />
              <span className={style.hour}>{item.hours}</span>
              {item.name}
            </div>
          )
        }
        return null
      })
    }
    return null
  }
  return (
    <div className={style.calendar}>
      {dateType !== 'month' ? (
        <div className={style.calendar_header}>
          <div className={style.clock_calendar}>
            <img src={icons.clockCalendarSVG} alt="" />
          </div>
          {dateType === 'date' ? dayHeader : weekHeader}
        </div>
      ) : null}
      {dateType !== 'month' ? (
        <div className={style.calendar_content}>{calendarContent}</div>
      ) : null}

      {dateType === 'month' ? (
        <div className={style.month}>
          <Calendar
            dateCellRender={dateCellRender}
            className="calendar_table"
            mode="month"
            locale={locale}
            value={moment(selectedDate)}
            headerRender={() => false}
          />
        </div>
      ) : null}
    </div>
  )
}

export default CalendarPage
