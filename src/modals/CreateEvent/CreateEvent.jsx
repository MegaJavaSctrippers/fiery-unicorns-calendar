/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import classNames from 'classnames'
import { DatePicker, Space, Divider, Select } from 'antd'
import PropTypes from 'prop-types'
import moment from 'moment'
import locale from 'antd/es/date-picker/locale/ru_RU'
import { useSelector, useDispatch } from 'react-redux'
import icons from '../../assets/icons'
import style from './CreateEvent.module.scss'
import Users from './Users'
import eventDefault from './eventDefault'
import api from '../../services/api'
import { getEvents, getFreeRoomAndUsers } from '../../store/actions/eventAction'
import { setFreeRoom } from '../../store/slices/eventSlice'

const { Option } = Select

function CreateEvent({ handleClose }) {
  const dispatch = useDispatch()
  const selectedDate = useSelector((state) => state.date.selectedDate)
  const labels = useSelector((state) => state.labels.labels)
  const hours = useSelector((state) => state.date.hours)
  const repeat = useSelector((state) => state.date.repeat)
  const freeUsers = useSelector((state) => state.event.freeUsers)
  const freeRooms = useSelector((state) => state.event.freeRooms)
  const [searchUser, setSearchUser] = useState('')

  const [event, setEvent] = useState({
    ...eventDefault,
    event_date: [moment(selectedDate).format('YYYY-MM-DD')],
  })
  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value })
  }
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

  const marks = labels.map((mark) => (
    <Option key={mark.id} value={`${mark.id}`}>
      <span className={style.create_label} style={{ background: mark.color }} />
      {mark.name}
    </Option>
  ))
  const onSubmit = async (e) => {
    e.preventDefault()
    const invites = event.invitees.map((item) => item.id)
    const n = parseInt(event.repetitions_count, 10)
    await api.post('/event/', { ...event, invitees: invites, repetitions_count: n }).then(() => {
      dispatch(getEvents())
      dispatch(setFreeRoom([]))
    })
  }
  const inviteUsers = (user) => {
    if (event.invitees.includes(user)) {
      alert('You already added')
    } else {
      setSearchUser('')
      setEvent({ ...event, invitees: [...event.invitees, user] })
    }
  }
  const getFreeUsers = (value) => {
    dispatch(getFreeRoomAndUsers(event, value))
  }
  const renderOption = (menu) => (
    <>
      {menu}
      <Divider
        style={{
          margin: '8px 0',
        }}
      />
      <Space
        style={{
          padding: '0 8px 4px',
        }}
      >
        <div className={classNames('d-flex justify-content-between', style.repeat_option)}>
          <span>Повт-неделя</span>
          <input onChange={handleChange} name="repetitions_count" />
        </div>
      </Space>
    </>
  )

  return (
    <div className={style.create_event}>
      <div style={{ maxWidth: '600px' }}>
        <div className={classNames(style.create_content)}>
          <div className={style.create_header}>
            <h2 id="exampleModalLabel">Новое событие</h2>
            <button type="button" className="btn-close" aria-label="close" onClick={handleClose} />
          </div>
          <form onSubmit={onSubmit} className={style.create_body}>
            <label htmlFor="name">
              Название
              <input
                value={event.name}
                onChange={handleChange}
                type="text"
                id="name1"
                name="name"
              />
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
                  onSelect={(v) => {
                    setEvent({ ...event, event_date: [moment(v).format('YYYY-MM-DD')] })
                  }}
                />
              </Space>
              <Space>
                <Select
                  placeholder="12:00"
                  onChange={(value) => setEvent({ ...event, start: value })}
                  showArrow={false}
                  className="general_select hour"
                >
                  {hourOption}
                </Select>
              </Space>
              -
              <Space>
                <Select
                  onChange={(value) => setEvent({ ...event, end: value })}
                  showArrow={false}
                  className="general_select hour"
                  placeholder="24:00"
                >
                  {hourOption}
                </Select>
              </Space>
              <Space>
                <Select
                  className="general_select select_repeat"
                  dropdownClassName="repeat_dropdown"
                  style={{ width: 500 }}
                  onChange={(value) => {
                    setEvent({ ...event, repetition: value })
                    getFreeUsers(value)
                  }}
                  dropdownRender={renderOption}
                  placeholder="Повторить"
                >
                  {repeatOption}
                </Select>
              </Space>
            </div>
            <label htmlFor="user">
              Добавить участников
              <input value={searchUser} onChange={(e) => setSearchUser(e.target.value)} />
              {searchUser && freeUsers.length ? (
                <div className={style.add_user}>
                  {freeUsers
                    .filter((i) => i.name.toLowerCase().includes(searchUser.toLowerCase()))
                    .map((item) => (
                      <div
                        onClick={() => inviteUsers(item)}
                        key={item.id}
                        className="d-flex align-items-center mb-2"
                      >
                        <div
                          style={{
                            border: item.status ? '2.5px solid #80DEA0' : '2.5px solid #E03230',
                            borderRadius: '50%',
                            marginLeft: '10px',
                            marginRight: '10px',
                          }}
                        >
                          <img src={icons.avatar} alt="" style={{ marginRight: 0 }} />
                        </div>
                        <div>
                          <h3>
                            {`${item.name} `}
                            {item.surname}
                          </h3>
                          <span>{item.department[0]}</span>
                        </div>
                      </div>
                    ))}
                </div>
              ) : null}
            </label>
            <div className="d-flex align-items-center justify-content-between">
              <span className={style.label_span}>
                Участники
                {` (${event.invitees.length})`}
              </span>
            </div>
            <Users invitees={event.invitees} />
            <span className={style.label_span}>Помещение</span>
            <div className={style.dates}>
              <Space className="select_full_width">
                <Select
                  onChange={(value) => setEvent({ ...event, room: parseInt(value, 10) })}
                  placeholder="Выберите помещение"
                  className="general_select"
                >
                  {freeRooms?.map((room) => (
                    <Option key={room.id}>{room.name}</Option>
                  ))}
                </Select>
              </Space>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className="w-50">
                <span className={style.label_span}>Рабочий</span>
                <Space className="select_full_width margin_right">
                  <Select
                    onChange={(value) => setEvent({ ...event, mark: value })}
                    className="general_select"
                  >
                    {marks}
                  </Select>
                </Space>
              </div>

              <div className="w-50">
                <span className={style.label_span}>Общедоступное</span>
                <Space className="select_full_width">
                  <Select
                    onChange={(value) => setEvent({ ...event, is_private: value })}
                    defaultValue="Общедоступное"
                    className="general_select"
                  >
                    <Option value={false}>Общедоступное</Option>
                    <Option value={!false}>Личное</Option>
                  </Select>
                </Space>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button onClick={handleClose} type="submit" className={style.save}>
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

CreateEvent.propTypes = {
  handleClose: PropTypes.func.isRequired,
}
export default CreateEvent
