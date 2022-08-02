import React from 'react'
import { DatePicker, Space } from 'antd'
import { Popover } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import locale from 'antd/es/date-picker/locale/ru_RU'
import moment from 'moment'
import style from './SideBar.module.scss'
import icons from '../../assets/icons'
import { setSelectedDate } from '../../store/date/dateSlice'
import 'moment/locale/ru'
import CreateEvent from '../../modals/CreateEvent/CreateEvent'
import Labels from '../Labels/Labels'
import Invitation from '../../modals/Invitation/Inivitation'

function SideBar() {
  const selectedDate = useSelector((state) => state.date.selectedDate)
  const dispatch = useDispatch()

  const selectDate = (value) => {
    dispatch(setSelectedDate(moment(value).format()))
  }
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
    <div className={style.sidebar}>
      <div className={style.header}>
        <img className={style.logo} src={icons.calendarSVG} alt="" />
        <h2 className={style.title}>Calendar</h2>
      </div>

      <div className={style.content}>
        <button
          aria-hidden="true"
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
          type="button"
          className={style.create_btn}
        >
          Создать
        </button>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          transitionDuration="auto"
          className="material_popover"
          anchorPosition={{
            left: 380,
            top: 50,
          }}
          anchorReference="anchorPosition"
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
        >
          <CreateEvent handleClose={handleClose} />
        </Popover>
        <Invitation />
        <Space direction="vertical">
          <DatePicker
            open="true"
            dropdownClassName="main_date"
            style={{ visibility: 'hidden' }}
            superNextIcon={false}
            superPrevIcon={false}
            mode="date"
            size="small"
            showToday={false}
            locale={locale}
            value={moment(selectedDate)}
            onChange={(value) => selectDate(value)}
          />
        </Space>
        <Labels />
      </div>
    </div>
  )
}
export default SideBar
