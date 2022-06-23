import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Select, Space, Popover } from 'antd'
import moment from 'moment'
import icons from '../../assets/icons'
import {
  setDateType,
  setSelectedDate,
  addDate,
  subrtactDate,
} from '../../redux-toolkit/dateReducer'
import style from './Header.module.scss'

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
          <img src={icons.folder} alt="" />
          Название
        </li>
        <li>
          <img src={icons.clock} alt="" />
          Дата
        </li>
        <li>
          <img src={icons.profile} alt="" />
          Сотрудник
        </li>
        <li>
          <img src={icons.job} alt="" />
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
          <Select value={dateType} onChange={(value) => dispatch(setDateType(value))}>
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
            <img src={icons.search} alt="" />
          </div>
        </Popover>
        <div className={style.push_box}>
          <img src={icons.push} alt="" />
        </div>
        <div className={style.user_box}>
          <img src={icons.avatar} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
