/* eslint-disable import/no-named-as-default-member */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import icons from '../../assets/icons'
import style from './Invitation.module.scss'
import InivitationItem from './InvitationItem'
import { setDelegate } from '../../store/slices/notificationSlice'
import api from '../../services/api'

function Invitation({ id }) {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUserToDelegate = async () => {
      await api.get(`delegation-users/?event=${id}`).then((res) => {
        setUsers(res.data)
      })
    }
    getUserToDelegate()
  }, [])
  return (
    <div className={style.popup_modal}>
      <div className={style.popup_backdrop} onClick={() => dispatch(setDelegate(''))} />
      <div className="modal-content">
        <div className={style.popup_header}>
          <h5>Делегировать</h5>
          <button onClick={() => dispatch(setDelegate(''))} type="button">
            <img src={icons.closeBlackSVG} alt="" />
          </button>
        </div>
        <div className={style.popup_search}>
          <img alt="" src={icons.searchSVG} />
          <input onChange={(e) => setSearch(e.target.value)} type="text" />
        </div>
        <div className={style.popup_body}>
          {users
            .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            .map((user) => (
              <InivitationItem eventId={id} key={user.id} user={user} />
            ))}
        </div>
      </div>
    </div>
  )
}
Invitation.propTypes = {
  id: PropTypes.number,
}
export default Invitation
