import React from 'react'
import { DatePicker, Space } from 'antd'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import locale from 'antd/es/date-picker/locale/ru_RU'
import moment from 'moment'
import style from './SideBar.module.scss'
import icons from '../../assets/icons'
import { setSelectedDate } from '../../redux-toolkit/dateReducer'
import 'moment/locale/ru'
import CreateEvent from '../../modals/CreateEvent/CreateEvent'

function SideBar() {
  const dateType = useSelector((state) => state.date.dateType)
  const selectedDate = useSelector((state) => state.date.selectedDate)
  const dispatch = useDispatch()

  return (
    <div className={style.sidebar}>
      <div className={style.header}>
        <img className={style.logo} src={icons.calendar} alt="" />
        <h2 className={style.title}>Calendar</h2>
      </div>

      <div className={style.content}>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#create-event"
          className={style.create_btn}
        >
          Создать
        </button>
        <CreateEvent />
        <Space direction="vertical">
          <DatePicker
            open="true"
            dropdownClassName="main_date"
            style={{ visibility: 'hidden' }}
            superNextIcon={false}
            superPrevIcon={false}
            size="small"
            showToday={false}
            picker={dateType}
            locale={locale}
            value={moment(selectedDate)}
            onChange={(value) => {
              dispatch(setSelectedDate(moment(value).format()))
            }}
          />
        </Space>

        <div className={style.labels}>
          <div className={style.labels_header}>
            <h2 className={style.labels_title}>Мои метки</h2>
            <div className={style.labels_add}>
              <img src={icons.plus} alt="" />
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
