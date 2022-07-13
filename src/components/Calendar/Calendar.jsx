import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Calendar } from 'antd'
import locale from 'antd/es/date-picker/locale/ru_RU'
import moment from 'moment'
import style from './Calendar.module.scss'
import icons from '../../assets/icons'
import CalendarHeader from '../CalendarHeader/CalendarHeader'
import CalendarItem from '../CalendarItem/CalendarItem'
import { setSelectedDate } from '../../redux-toolkit/dateReducer'
import Invitation from '../../modals/Invitation/Inivitation'
import CalendarParent from './CalendarParent'

function CalendarPage() {
  const week = useSelector((state) => state.date.week)
  const selectedDate = useSelector((state) => state.date.selectedDate)
  const dateType = useSelector((state) => state.date.dateType)

  const dispatch = useDispatch()
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
  const bool = true
  const dateCellRender = (value) => {
    if (value) {
      return <CalendarParent visible={bool} value={value} />
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
            onSelect={(value) => {
              dispatch(setSelectedDate(moment(value).format()))
            }}
          />
          <Invitation />
        </div>
      ) : null}
    </div>
  )
}

export default CalendarPage
