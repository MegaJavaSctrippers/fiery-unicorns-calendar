import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Popover } from 'antd'
import icons from '../../assets/icons'
import style from './CalendarItem.module.scss'
import CalendarWeek from './CalendarWeek'

function CalendarItem(props) {
  const week = useSelector((state) => state.date.week)
  const dateType = useSelector((state) => state.date.dateType)
  const selectedDate = useSelector((state) => state.date.selectedDate)
  const label = useSelector((state) => state.event.label)
  const { hour, events } = props

  const handleHover = (data, days) => {
    if (data) {
      return (
        <div className={style.event_popover}>
          <h3>{data.name}</h3>
          <div className="d-flex align-items-start">
            <img alt="" src={icons.blueClockSVG} />
            <p className="m-0 mx-2">
              <span>{moment(days).format('YYYY-MM-DD dddd')}</span>
              <br />
              <span>
                {`${data.start}  -  `}
                {data.end}
              </span>
            </p>
          </div>
          <div>
            <img src={icons.locationSVG} alt="" />
            <span>{data.room}</span>
          </div>
        </div>
      )
    }
    return null
  }
  const dateFormat = (date) => moment(date).format('YYYY-MM-DD')

  const calendarWeek = week.map((days) => (
    <div className={style.days} key={days}>
      {events
        .filter((item) => item.mark?.color?.includes(label))
        .map((item) => {
          if (item.event_date.includes(dateFormat(days)) && item.start === hour) {
            return (
              <Popover
                key={item.id}
                trigger="hover"
                placement="rightTop"
                overlayClassName="event_popup"
                content={handleHover(item, days)}
              >
                <div className={style.week_data}>
                  <span className={style.label} style={{ background: item.mark?.color }} />
                  <span className={style.event_name}>{item.name}</span>
                  <span className={style.event_time}>
                    {`${item.start}  -  `}
                    {item.end}
                  </span>
                </div>
              </Popover>
            )
          }
          return null
        })}
      {events.find((e) => e.event_date.includes(dateFormat(days)) && e.start === hour) ? null : (
        <CalendarWeek value={dateFormat(days)} />
      )}
    </div>
  ))
  const calendarDay = events
    .filter((item) => item.mark?.color?.includes(label))
    .map((item) => {
      if (item.event_date[0] === moment(selectedDate).format('YYYY-MM-DD') && item.start === hour) {
        return (
          <div key={item.id}>
            <span className={style.label} style={{ background: item.mark?.color }} />
            <span className={style.event_name_single}>{item.name}</span>
            <span className={style.event_time}>
              {`${item.start} - `}
              {item.end}
            </span>
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
  events: PropTypes.array,
}
export default CalendarItem
