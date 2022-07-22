import React, { useState } from 'react'
import axios from 'axios'

function InviteUser() {
  const [user, setUser] = useState('')
  const handleChange = (e) => {
    setUser(e.target.value)
  }
  const inviteUser = async () => {
    await axios
      .post('https://checkit24.herokuapp.com/api/sendinvitation/', {
        email: user,
      })
      .then((res) => {
        console.log(res)
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
          Сохранить
        </button>
      </div>
    </div>
  )
}

export default InviteUser
