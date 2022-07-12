import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Calendar, Popover } from 'antd'
import locale from 'antd/es/date-picker/locale/ru_RU'
import moment from 'moment'
import style from './Calendar.module.scss'
import icons from '../../assets/icons'
import CalendarHeader from '../CalendarHeader/CalendarHeader'
import CalendarItem from '../CalendarItem/CalendarItem'
import CreateEvent from '../../modals/CreateEvent/CreateEvent'

function CalendarPage() {
  const week = useSelector((state) => state.date.week)
  const selectedDate = useSelector((state) => state.date.selectedDate)
  const dateType = useSelector((state) => state.date.dateType)
  const data = useSelector((state) => state.date.events)

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

  const handleHover = (data) => {
    if (data) {
      return (
        <div className={style.event_popover}>
          <h3>{data.name}</h3>
          <div className="d-flex align-items-start">
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
  const content = () => <CreateEvent />

  const dateCellRender = (value) => {
    if (value) {
      return (
        <Popover
          overlayClassName="centered_popover"
          content={content}
          placement="right"
          trigger="click"
        >
          <div className="bektemir">
            {data.map((item) => {
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
                      ...
                    </div>
                  </Popover>
                )
              }
              return null
            })}
          </div>
        </Popover>
      )
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
          <Popover conntent={content}>
            <Calendar
              dateCellRender={dateCellRender}
              className="calendar_table"
              mode="month"
              locale={locale}
              value={moment(selectedDate)}
              headerRender={() => false}
            />
          </Popover>
        </div>
      ) : null}
    </div>
  )
}

export default CalendarPage
