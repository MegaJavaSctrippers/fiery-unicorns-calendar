import React, { useState } from 'react'
import { Popover } from 'antd'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { PropTypes } from 'prop-types'
import CreateEvent from '../../modals/CreateEvent/CreateEvent'
import CalendarChild from './CalendarChild'

function CalendarParent({ value }) {
  const data = useSelector((state) => state.date.events)
  const [visible, setVisible] = useState(false)

  const showPopover = () => {
    setVisible(!visible)
  }
  const content = () => <CreateEvent showPopover={showPopover} value={value} />
  return (
    <div>
      <div className={visible ? 'disable_select' : null} />
      <Popover
        overlayClassName="centered_popover"
        content={content}
        placement="right"
        trigger="click"
        visible={visible}
        onClick={() => setVisible(!visible)}
      >
        <div className="bektemir">
          {data.map((item) => {
            if (item.date === moment(value).format('YYYY-MM-DD')) {
              return <CalendarChild key={item.name} item={item} />
            }
            return null
          })}
        </div>
      </Popover>
    </div>
  )
}

CalendarParent.propTypes = {
  value: PropTypes.object.isRequired,
}

export default CalendarParent
