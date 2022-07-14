import React from 'react'
import { Popover } from '@mui/material'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { PropTypes } from 'prop-types'
import CreateEvent from '../../modals/CreateEvent/CreateEvent'
import CalendarChild from './CalendarChild'

function CalendarParent({ value }) {
  const data = useSelector((state) => state.date.events)

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <div
        aria-hidden="true"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        className="bektemir"
      >
        {data.map((item) => {
          if (item.date === moment(value).format('YYYY-MM-DD')) {
            return <CalendarChild key={item.name} item={item} />
          }
          return null
        })}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transitionDuration="auto"
        marginThreshold={60}
        className="material_popover"
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <CreateEvent handleClose={handleClose} value={value} />
      </Popover>

      {/* <Popover
        overlayClassName="centered_popover"
        content={content}
        placement="right"
        trigger="click"
      >
        <div className="bektemir">
          {data.map((item) => {
            if (item.date === moment(value).format('YYYY-MM-DD')) {
              return <CalendarChild key={item.name} item={item} />
            }
            return null
          })}
        </div>
      </Popover> */}
    </div>
  )
}

CalendarParent.propTypes = {
  value: PropTypes.object.isRequired,
}

export default CalendarParent
