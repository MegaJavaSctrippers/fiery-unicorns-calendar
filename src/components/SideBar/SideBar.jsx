import React from 'react'
import { DatePicker, Space } from 'antd'
import classNames from 'classnames'
import { Popover } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import locale from 'antd/es/date-picker/locale/ru_RU'
import moment from 'moment'
import style from './SideBar.module.scss'
import icons from '../../assets/icons'
import { setSelectedDate } from '../../redux-toolkit/dateReducer'
import 'moment/locale/ru'
import CreateEvent from '../../modals/CreateEvent/CreateEvent'

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
            left: 400,
            top: 60,
          }}
          anchorReference="anchorPosition"
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
        >
          <CreateEvent handleClose={handleClose} />
        </Popover>

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
            onChange={(value) => {
              selectDate(value)
            }}
          />
        </Space>

        <div className={style.labels}>
          <div className={style.labels_header}>
            <h2 className={style.labels_title}>Мои метки</h2>
            <div className={style.labels_add}>
              <img src={icons.plusSVG} alt="" />
            </div>
          </div>

          <div className="d-flex align-items-center mb-1">
            <span className={classNames(style.labels_color, style.labels_private)}> </span>
            Личный
          </div>
          <div className="d-flex align-items-center mb-1">
            <span className={classNames(style.labels_color, style.labels_work)}> </span>
            Рабочий
          </div>
          <div className="d-flex align-items-center mb-1">
            <span className={classNames(style.labels_color, style.labels_party)}> </span>
            Мероприятия
          </div>
          <div className="d-flex align-items-center mb-1">
            <span className={classNames(style.labels_color, style.labels_project)}> </span>
            Проекты
          </div>
        </div>
      </div>
    </div>
  )
}
export default SideBar
