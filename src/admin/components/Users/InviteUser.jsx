import React, { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import { API } from '../../../services/api'
import axios from 'axios'
import icons from '../../../assets/icons'

const Alert = withReactContent(Swal)

function InviteUser() {
  const [user, setUser] = useState('')
  const handleChange = (e) => {
    setUser(e.target.value)
  }
  const alertContent = (
    <div className="d-flex align-items-center">
      <img className="success_img" src={icons.acceptSVG} alt="" />
      <span>Приглашение отправлено</span>
    </div>
  )
  const inviteUser = async () => {
    await axios
      .post('https://checkit24.herokuapp.com/api/sendinvitation/', { email: user })
      .then((res) => {
        console.log(res)
        setUser('')
        Alert.fire({
          position: 'bottom',
          html: alertContent,
          text: 'Приглашение отправлено',
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: 'success-sweet',
          },
        })
      })
      .catch((e) => {
        console.log(e)
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
