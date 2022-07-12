import React, { useState } from 'react'
import classNames from 'classnames'
import { DatePicker, Space, Select } from 'antd'
import locale from 'antd/es/date-picker/locale/ru_RU'
import style from './CreateEvent.module.scss'
import icons from '../../assets/icons'

const { Option } = Select

function CreateEvent() {
  const [hours] = useState([
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ])
  const [repeat] = useState([
    'Не повторят',
    'Ежедневно',
    'По будням (Пн-Пт)',
    'Еженедельно (среда)',
    'Ежемесячно (1ая среда)',
    'Ежегодно (2 сент.)',
  ])
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
      {/* // className={classNames('modal fade', style.create_event)}
      // id="create-event"
      // tabIndex="-1"
      // aria-hidden="false" */}

      <div style={{ maxWidth: '550px' }}>
        <div className={classNames('', style.create_content)}>
          <div className={style.create_header}>
            <h2 id="exampleModalLabel">Новое событие</h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className={style.create_body}>
            <label htmlFor="name">
              Название
              <input type="text" id="name" name="name" />
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
                />
              </Space>
              <Space>
                <Select showArrow={false} defaultValue="09:00" className="general_select">
                  {hourOption}
                </Select>
              </Space>
              -
              <Space>
                <Select showArrow={false} defaultValue="18:00" className="general_select">
                  {hourOption}
                </Select>
              </Space>
              <Space>
                <Select defaultValue="Не повторять" className="general_select select_repeat">
                  {repeatOption}
                </Select>
              </Space>
            </div>
            {/* <label htmlFor="user">
              <input id="user" placeholder="Поиск участников" />
            </label> */}
            <span className={style.label_span}>Участники (1)</span>
            <div className={style.invite_box}>
              <div className={style.invite_user}>
                <img src={icons.avatar} alt="" />
                <div>
                  <h4>Jenny Wilson</h4>
                  <span>Intern</span>
                </div>
              </div>
              <div className={style.invite_user}>
                <img src={icons.avatar} alt="" />
                <div>
                  <h4>Jenny Wilson</h4>
                  <span>Intern</span>
                </div>
              </div>
            </div>
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
              <button type="button" className={style.save}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CreateEvent
