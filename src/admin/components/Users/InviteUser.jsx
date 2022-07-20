import React, { useState } from 'react'

function InviteUser() {
  const [user, setUser] = useState('')
  const handleChange = (e) => {
    setUser(e.target.value)
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
        <button disabled={!user.length > 0} className="create_btn" type="button">
          Сохранить
        </button>
      </div>
    </div>
  )
}

export default InviteUser
