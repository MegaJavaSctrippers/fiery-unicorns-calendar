import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { success } from '../../../services/success'
import api from '../../../services/api'
import SuccessAlert from '../Alerts/SuccessAlert'
import { setInviteUser } from '../../../store/adminSlice'

function InviteUser() {
  const [user, setUser] = useState('')
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setUser(e.target.value)
  }
  const inviteUser = async () => {
    await api.post('/sendinvitation/', { email: user }).then(() => {
      setUser('')
      dispatch(setInviteUser(false))
      success(<SuccessAlert text="Приглашения отправлена" />)
    })
  }
  return (
    <div>
      <div className="create_title">
        Пригласить:
        <span>Пользователя</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Email пользователя</span>
          <input
            onChange={handleChange}
            value={user}
            name="organization"
            className="create_input"
          />
        </div>
        <button
          onClick={inviteUser}
          disabled={!user.length > 0}
          className="create_btn"
          type="button"
        >
          Отправить
        </button>
      </div>
    </div>
  )
}

export default InviteUser
