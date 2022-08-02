import React from 'react'
import classNames from 'classnames'
import { DatePicker, Space, Select } from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'
import locale from 'antd/es/date-picker/locale/ru_RU'
import { useSelector } from 'react-redux'
import style from './CreateEvent.module.scss'
import icons from '../../assets/icons'
import Users from './Users'

const { Option } = Select

function CreateEvent({ handleClose }) {
  const selectedDate = useSelector((state) => state.date.selectedDate)
  const hours = useSelector((state) => state.date.hours)
  const repeat = useSelector((state) => state.date.repeat)

  const hourOption = hours.map((hour) => (
    <Option key={hour} value={hour}>
      {hour}
    </Option>
  ))

  const repeatOption = repeat.map((item) => (
    <Option key={item} value={item}>
      {item}
    </Option>
  ))
  return (
    <div className={style.create_event}>
      <div style={{ maxWidth: '600px' }}>
        <div className={classNames(style.create_content)}>
          <div className={style.create_header}>
            <h2 id="exampleModalLabel">Новое событие</h2>
            <button type="button" className="btn-close" aria-label="close" onClick={handleClose} />
          </div>
          <div className={style.create_body}>
            <label htmlFor="name">
              Название
              <input type="text" id="name1" name="name" />
            </label>
            <span className={style.label_span}>Дата и время</span>
            <div
              className={classNames(
                'd-flex align-items-center justify-content-between',
                style.dates,
              )}
            >
              <Space direction="vertical" size={12}>
                <DatePicker
                  locale={locale}
                  suffixIcon={false}
                  className="datepicker_input"
                  dropdownClassName="create_date"
                  format="YYYY-MM-DD dddd"
                  showToday={false}
                  mode="date"
                  defaultValue={moment(selectedDate)}
                />
              </Space>
              <Space>
                <Select showArrow={false} defaultValue="09:00" className="general_select hour">
                  {hourOption}
                </Select>
              </Space>
              -
              <Space>
                <Select showArrow={false} defaultValue="18:00" className="general_select hour">
                  {hourOption}
                </Select>
              </Space>
              <Space>
                <Select defaultValue="Не повторять" className="general_select select_repeat">
                  {repeatOption}
                  <Option>
                    <div>
                      <span>Период повт. (неделя)</span>
                      <input />
                    </div>
                  </Option>
                </Select>
              </Space>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span className={style.label_span}>Участники (1)</span>
              <div data-bs-toggle="modal" data-bs-target="#invitation" className={style.invite_btn}>
                <img src={icons.whitePlusSVG} alt="" />
              </div>
            </div>
            <Users />
            <span className={style.label_span}>Помещение</span>
            <div className={style.dates}>
              <Space className="select_full_width">
                <Select defaultValue="Конферренц зал" className="general_select">
                  <Option value="1">Конференц зал</Option>
                  <Option value="2">Аудитория 1</Option>
                  <Option value="3">Аудитория 2</Option>
                </Select>
              </Space>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className="w-50">
                <span className={style.label_span}>Рабочий</span>
                <Space className="select_full_width margin_right">
                  <Select defaultValue="Рабочий" className="general_select">
                    <Option value="1">Рабочий</Option>
                    <Option value="2">Личный</Option>
                  </Select>
                </Space>
              </div>

              <div className="w-50">
                <span className={style.label_span}>Общедоступное</span>
                <Space className="select_full_width">
                  <Select defaultValue="Общедоступное" className="general_select">
                    <Option value="1">Общедоступное</Option>
                    <Option value="2">Личное</Option>
                  </Select>
                </Space>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button onClick={handleClose} type="button" className={style.save}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CreateEvent.propTypes = {
  handleClose: PropTypes.func.isRequired,
}
export default CreateEvent
