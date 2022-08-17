import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import classNames from 'classnames'
import { Select, Space, Popover } from 'antd'
import api from '../../services/api'
import Notification from '../../modals/Notification/Notification'
import style from './Header.module.scss'
import icons from '../../assets/icons'
import UserDropdown from './UserDropdown'
import { ReactComponent as PushIcon } from '../../assets/icons/push.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as FolderIcon } from '../../assets/icons/folder.svg'
import { ReactComponent as ClockIcon } from '../../assets/icons/clock.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile.svg'
import { ReactComponent as JobIcon } from '../../assets/icons/job.svg'
import EditProfile from '../../modals/EditProfile/EditProfile'
import { setDateType, setSelectedDate, addDate, subrtactDate } from '../../store/date/dateSlice'
import { getNotifications } from '../../store/notification/notificationActions'
import { getUser } from '../../store/admin/actions/users'

const { Option } = Select

const content = (
  <div className={style.search_dropdown}>
    <div className={style.search_header}>
      <img src={icons.searchSVG} alt="" />
      <input placeholder="Поиск" />
      <img src={icons.clearSVG} alt="" />
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

function Header() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
    dispatch(getNotifications())
  }, [])
  const user = useSelector((state) => state.users.user)
  console.log(user, 'jjjj')
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
            <img src={icons.arrowLeftSVG} alt="" />
          </button>

          <button type="button" className={style.nextIcon} onClick={() => dispatch(addDate())}>
            <img src={icons.arrowRightSVG} alt="" />
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
            return `${moment(selectedDate).format('DD MMMM YYYY')} - ${moment(selectedDate).format(
              'dddd',
            )}`
          })()}
        </h2>
      </div>

      <div className={style.box}>
        <Popover
          className="header_popover"
          placement="bottomRight"
          content={content}
          trigger="click"
        >
          <div className={style.search_box}>
            <SearchIcon className={style.search_icon} />
          </div>
        </Popover>
        <div className={style.push_box} data-bs-toggle="modal" data-bs-target="#notification">
          <PushIcon className={style.push_icon} />
        </div>
        <Notification />
        <div className="dropdown">
          <div
            data-bs-toggle="dropdown"
            aria-expanded="false"
            className={classNames(style.user_box, 'dropdown-toggle')}
          >
            <img src={icons.avatar} alt="" />
          </div>
          <ul className="dropdown-menu">
            <UserDropdown user={user} />
          </ul>
        </div>
        <EditProfile user={user} />
      </div>
    </div>
  )
}

export default Header
