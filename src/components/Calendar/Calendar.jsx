import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Calendar, Button, Popover } from 'antd'
import locale from 'antd/es/date-picker/locale/ru_RU'
import moment from 'moment'
import classNames from 'classnames'
import style from './Calendar.module.scss'
import icons from '../../assets/icons'
import CalendarHeader from '../CalendarHeader/CalendarHeader'
import CalendarItem from '../CalendarItem/CalendarItem'
import { setDateType, setSelectedDate } from '../../redux-toolkit/dateReducer'

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
      name: 'Megalab',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '10:00',
    },
    {
      name: 'Football with friends',
      date: moment('2022-07-18').format('YYYY-MM-DD'),
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

  const handleHover = (data) => {
    if (data) {
      return (
        <div className={style.event_popover}>
          <h3>{data.name}</h3>
          <div className="d-flex align-items-start mb-2">
            <img alt="" src={icons.blueClockSVG} />
            <p className="m-0 mx-2">
              <span>{moment(data.date).format('YYYY-MM-DD dddd')}</span>
              <br />
              <span>{data.hours}</span>
            </p>
          </div>
          <div>
            <img src={icons.locationSVG} alt="" />
            <span> 1 этаж, 4 кабинет</span>
          </div>
        </div>
      )
    }
    return null
  }
  const dateCellRender = (value) => {
    if (value) {
      return data.map((item) => {
        if (item.date === moment(value).format('YYYY-MM-DD')) {
          return (
            <Popover
              key={item.name}
              trigger="hover"
              placement="rightTop"
              overlayClassName="event_popup"
              content={handleHover(item)}
            >
              <div className={style.event_name} key={item.name}>
                <span className={style.label} />
                <span className={style.hour}>{item.hours}</span>
                {item.name}
              </div>
            </Popover>
          )
        }
        return null
      })
    }
    return null
  }
  const selectDate = (value) => {
    // dispatch(setDateType('date'))
    dispatch(setSelectedDate(moment(value).format()))
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
            onSelect={(value) => selectDate(value)}
          />
        </div>
      ) : null}
    </div>
  )
}

export default CalendarPage
