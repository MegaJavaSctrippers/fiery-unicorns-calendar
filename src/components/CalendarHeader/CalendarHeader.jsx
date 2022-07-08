import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import style from './CalendarHeader.module.scss'

function CalendarHeader(props) {
  return (
    <div className={style.day}>
      <h4>{moment(props.day).format('dd')}</h4>
      <span>{moment(props.day).format('D')}</span>
    </div>
  )
}

CalendarHeader.propTypes = {
  day: PropTypes.string.isRequired,
}
export default CalendarHeader
