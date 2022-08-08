import React from 'react'
import { Popover } from '@mui/material'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { PropTypes } from 'prop-types'
import CreateEvent from '../../modals/CreateEvent/CreateEvent'
import CalendarChild from './CalendarChild'

function CalendarParent({ value }) {
  const data = useSelector((state) => state.event.events)

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const calendarChild = data.map((item) => {
    if (item.date === moment(value).format('YYYY-MM-DD')) {
      return <CalendarChild key={item.name} item={item} />
    }
    return null
  })
  return (
    <div>
      <div
        aria-hidden="true"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        className="bektemir"
      >
        {calendarChild}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorReference={anchorEl}
        onClose={handleClose}
        transitionDuration="auto"
        className="material_popover"
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <CreateEvent handleClose={handleClose} />
      </Popover>
    </div>
  )
}

CalendarParent.propTypes = {
  value: PropTypes.object.isRequired,
}

export default CalendarParent
