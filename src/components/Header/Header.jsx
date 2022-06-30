import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { Select, Space, Popover } from 'antd'
import Notification from '../../modals/Notification/Notification'
import style from './Header.module.scss'
import icons from '../../assets/icons'
import { ReactComponent as PushIcon } from '../../assets/icons/push.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as FolderIcon } from '../../assets/icons/folder.svg'
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import { ReactComponent as JobIcon } from '../../assets/icons/job.svg'
import {
  setDateType,
  setSelectedDate,
  addDate,
  subrtactDate,
} from '../../redux-toolkit/dateReducer'

const { Option } = Select

function Header() {
  const content = (
    <div className={style.search_dropdown}>
      <div className={style.search_header}>
        <img src={icons.search} alt="" />
        <input placeholder="Поиск" />
        <img src={icons.clear} alt="" />
      </div>

      <ul className={style.search_menu}>
        <li>Все</li>
        <li>
          <FolderIcon className={style.search_svg} />
          Название
        </li>
        <li>
          <ClockIcon className={style.search_svg} />
          Дата
        </li>
        <li>
          <ProfileIcon className={style.search_svg} />
          Сотрудник
        </li>
        <li>
          <JobIcon className={style.search_svg} />
          Должность
        </li>
      </ul>
    </div>
  )
  const dispatch = useDispatch()
  const dateType = useSelector((state) => state.date.dateType)
  const selectedDate = useSelector((state) => state.date.selectedDate)
  return (
    <div className={style.header}>
      <div className="d-flex align-items-center">
        <button
          className={style.today_btn}
          type="button"
          onClick={() => dispatch(setSelectedDate(moment().format()))}
        >
          Сегодня
        </button>
        <Space>
          <Select
            className="select_type"
            value={dateType}
            onChange={(value) => dispatch(setDateType(value))}
          >
            <Option value="date">День</Option>
            <Option value="week">Неделя</Option>
            <Option value="month">Месяц</Option>
          </Select>
        </Space>

        <div className="d-flex align-items-center">
          <button type="button" className={style.prevIcon} onClick={() => dispatch(subrtactDate())}>
            <img src={icons.arrowLeft} alt="" />
          </button>

          <button type="button" className={style.nextIcon} onClick={() => dispatch(addDate())}>
            <img src={icons.arrowRight} alt="" />
          </button>
        </div>

        <h2 className={style.date}>
          {(() => {
            if (dateType === 'week') {
              return `${moment(selectedDate).startOf('week').format('D')}-
                      ${moment(selectedDate).endOf('week').format('D')} 
                      ${moment(selectedDate).format('MMMM YYYY')}`
            }
            if (dateType === 'month') {
              return moment(selectedDate).format('MMMM YYYY')
            }
            return moment(selectedDate).format('DD MMMM YYYY')
          })()}
        </h2>
      </div>

      <div className={style.box}>
        <Popover placement="bottomRight" content={content} trigger="click">
          <div className={style.search_box}>
            <SearchIcon className={style.search_icon} />
          </div>
        </Popover>
        <div className={style.push_box} data-bs-toggle="modal" data-bs-target="#notification">
          <PushIcon className={style.push_icon} />
        </div>
        <Notification />
        <div className={style.user_box}>
          <img src={icons.avatar} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
