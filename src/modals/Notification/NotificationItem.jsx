import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { Tooltip } from 'antd'
import api from '../../services/api'
import { getNotifications } from '../../store/notification/notificationActions'
import icons from '../../assets/icons'
import style from './Notification.module.scss'
import Invitation from '../Invitation/Inivitation'
import { getEvents } from '../../store/event/eventAction'
import { setDelegate } from '../../store/notification/notificationSlice'

function NotificationItem() {
  const [event, setEvent] = useState(0)
  const notifications = useSelector((state) => state.notifications.notifications)
  const delegate = useSelector((state) => state.notifications.delegate)
  const dispatch = useDispatch()
  const submitNot = async (item, id) => {
    await api.patch(`/invitation/${id}/`, { invitation_status: item }).then(() => {
      dispatch(getNotifications())
      dispatch(getEvents())
    })
  }
  const title = (user) => (
    <>
      <div>
        {`${user.name} `}
        {user.surname}
      </div>
      <span>{user.positions[0]}</span>
    </>
  )
  const statusText = (status) => {
    switch (status) {
      case 'A':
        return <span style={{ color: '#6DD349' }}>Принят</span>
      case 'D':
        return <span style={{ color: '#E26C6C' }}>Отклонен</span>
      default:
        return <span style={{ color: 'orange' }}>Делегирован</span>
    }
  }
  return (
    <div>
      <div className={style.notification_menu}>
        <span style={{ width: '30%' }}>Название события</span>
        <span style={{ width: '11%' }}>Дата встречи</span>
        <span style={{ width: '13%' }}>Время встречи</span>
        <span style={{ width: '16%' }}>Место встречи</span>
        <span style={{ width: '14%' }}>Повтор</span>
        <span style={{ width: '12%' }}>Делегирован от</span>
        <span style={{ width: '12%' }}>Статус</span>
        <span style={{ width: '16%' }}>Участники</span>
      </div>
      <div className={style.notification_header}>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className={style.notif_scroll}>
        {notifications
          .map((item) => (
            <div key={item.id} className={style.notification_content}>
              {item.invitations_status === 'P' ? <div className={style.status} /> : null}
              <div className={style.content_item} style={{ width: '30%' }}>
                <h2>{item.event.name}</h2>
                {`${item.event.creator.name} ${item.event.creator.surname}`}
              </div>
              <div className={style.content_item} style={{ width: '11%' }}>
                <span>{item.event.date}</span>
                <span>{moment(item.event.date).format('dddd')}</span>
              </div>
              <div className={style.content_item} style={{ width: '13%' }}>
                {`${item.event.start} - `}
                {item.event.end}
              </div>
              <div className={style.content_item} style={{ width: '16%' }}>
                {item.event.room}
              </div>
              <div className={style.content_item} style={{ width: '14%' }}>
                {item.event.repetition}
              </div>
              <div className={style.content_item} style={{ width: '12%' }}>
                {item.delegated_from ? (
                  <span>
                    {`${item.delegated_from.name} - `}
                    {item.delegated_from.surname}
                  </span>
                ) : (
                  '-'
                )}
              </div>
              <div style={{ width: '12%' }} className={style.content_img}>
                {item.invitations_status === 'P' ? (
                  <>
                    <button onClick={() => submitNot('A', item.event.id)} type="button">
                      <img src={icons.acceptSVG} alt="" />
                    </button>
                    {item.delegated_from ? null : (
                      <button
                        onClick={() => {
                          setEvent(item.event.id)
                          dispatch(setDelegate(item))
                        }}
                        type="button"
                      >
                        <img src={icons.resendSVG} alt="" />
                      </button>
                    )}
                    <button onClick={() => submitNot('D', item.event.id)} type="button">
                      <img src={icons.cancelSVG} alt="" />
                    </button>
                  </>
                ) : (
                  statusText(item.invitations_status)
                )}
              </div>
              <div style={{ width: '16%' }}>
                <div className={style.participants}>
                  {item.event.participants.map((user) => (
                    <Tooltip key={user.id} placement="bottom" title={title(user)}>
                      <img src={icons.avatar} alt="" />
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
          ))
          .reverse()}
      </div>
      {delegate ? <Invitation id={event} /> : null}
    </div>
  )
}

export default NotificationItem
