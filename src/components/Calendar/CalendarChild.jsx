import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Popover } from 'antd'
import icons from '../../assets/icons'
import style from './Calendar.module.scss'

function CalendarChild({ item }) {
  const handleHover = (data) => {
    if (data) {
      return (
        <div className={style.event_popover}>
          <h3>{data.name}</h3>
          <div className="d-flex align-items-start">
            <img alt="" src={icons.blueClockSVG} />
            <p className="m-0 mx-2">
              <span>{moment(data.event_date[0]).format('YYYY-MM-DD dddd')}</span>
              <br />
              <span>
                {`${data.start} - `}
                {data.end}
              </span>
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
  return (
    <Popover
      trigger="hover"
      placement="rightTop"
      overlayClassName="event_popup"
      content={handleHover(item)}
    >
      <div className={style.event_name} key={item.name}>
        <span className={style.label} style={{ background: item.mark?.color }} />
        <span className={style.hour}>{item.hours}</span>
        {item.name}
      </div>
    </Popover>
  )
}

CalendarChild.propTypes = {
  item: PropTypes.object.isRequired,
}
export default CalendarChild
