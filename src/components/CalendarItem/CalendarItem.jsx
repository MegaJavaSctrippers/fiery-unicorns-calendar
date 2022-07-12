import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Popover } from 'antd'
import icons from '../../assets/icons'
import style from './CalendarItem.module.scss'

function CalendarItem(props) {
  const week = useSelector((state) => state.date.week)
  const dateType = useSelector((state) => state.date.dateType)
  const data = useSelector((state) => state.date.events)
  const selectedDate = useSelector((state) => state.date.selectedDate)
  const { hour } = props

  // Fake meetings data

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
  const calendarWeek = week.map((days) => (
    <div className={style.days} key={days}>
      {data.map((item) => {
        if (item.date === moment(days).format('YYYY-MM-DD') && item.hours === hour) {
          return (
            <Popover
              key={item.name}
              trigger="hover"
              placement="rightTop"
              overlayClassName="event_popup"
              content={handleHover(item)}
            >
              <div className={style.week_data}>
                <span className={style.label} />
                <span className={style.event_name}>{item.name}</span>
                <span className={style.event_time}>{item.hours}</span>
              </div>
            </Popover>
          )
        }
        return null
      })}
    </div>
  ))
  const calendarDay = data.map((item) => {
    if (item.date === moment(selectedDate).format('YYYY-MM-DD') && item.hours === hour) {
      return (
        <div key={item.name}>
          <span className={style.label} />
          <span className={style.event_name_single}>{item.name}</span>
          <span className={style.event_time}>{item.hours}</span>
        </div>
      )
    }
    return null
  })

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
