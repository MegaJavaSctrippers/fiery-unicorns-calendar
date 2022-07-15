import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import style from './CalendarHeader.module.scss'

function CalendarHeader(props) {
  const dateType = useSelector((state) => state.date.dateType)
  const today = moment().format('MMMM Do YY')
  return (
    <div className={style.day}>
      <h4>{moment(props.day).format('dd')}</h4>
      <span
        className={
          moment(props.day).format('MMM Do YY') === today && dateType === 'week' ? style.today : ''
        }
      >
        {moment(props.day).format('D')}
      </span>
    </div>
  )
}

CalendarHeader.propTypes = {
  day: PropTypes.string.isRequired,
}
export default CalendarHeader
