import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import style from './CalendarHeader.module.scss'

function CalendarHeader(props) {
  const dateType = useSelector((state) => state.date.dateType)
  return (
    <div className={style.day}>
      <h4>{moment(props.day).format('dd')}</h4>
      {dateType !== 'month' ? <span>{moment(props.day).format('D')}</span> : null}
    </div>
  )
}

CalendarHeader.propTypes = {
  day: PropTypes.string.isRequired,
}
export default CalendarHeader
