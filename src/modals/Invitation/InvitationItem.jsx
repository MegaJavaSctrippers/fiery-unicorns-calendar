import React from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import icons from '../../assets/icons'
import api from '../../services/api'
import style from './Invitation.module.scss'
import { setDelegate } from '../../store/slices/notificationSlice'
import { getNotifications } from '../../store/actions/notificationActions'

function InivitationItem({ user, eventId }) {
  const dispatch = useDispatch()
  const delegate = async () => {
    await api.post('/delegation/', { user: user.id, event: eventId }).then(() => {
      dispatch(setDelegate(''))
      dispatch(getNotifications())
    })
  }
  return (
    <div
      className={classNames('d-flex align-items-center justify-content-between', style.popup_user)}
    >
      <div className="d-flex align-items-center">
        <div
          className={style.avatar_border}
          style={{ border: user.status ? '3px solid #80DEA0' : '3px solid #E03230' }}
        >
          <img src={icons.avatar} alt="" />
        </div>
        <h2>{user.name}</h2>
      </div>
      <span>{user.positions[0]}</span>
      <span>{user.department[0]}</span>
      <button onClick={() => delegate()} className={style.delegate_btn} type="button">
        Делегировать
      </button>
    </div>
  )
}

InivitationItem.propTypes = {
  user: PropTypes.object,
  eventId: PropTypes.number,
}
export default InivitationItem
