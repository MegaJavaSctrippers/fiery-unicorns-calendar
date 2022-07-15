import React from 'react'
import Popover from '@mui/material/Popover'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import style from './CalendarItem.module.scss'
import CreateEvent from '../../modals/CreateEvent/CreateEvent'
import { setSelectedDate } from '../../redux-toolkit/dateReducer'

function CalendarWeek({ value }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const dispatch = useDispatch()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    dispatch(setSelectedDate(value))
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
        className={style.emptyWeek}
      />
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
        <CreateEvent handleClose={handleClose} />
      </Popover>
    </div>
  )
}

CalendarWeek.propTypes = {
  value: PropTypes.string.isRequired,
}
export default CalendarWeek
