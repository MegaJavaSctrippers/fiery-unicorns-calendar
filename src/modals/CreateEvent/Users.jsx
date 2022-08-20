import React from 'react'
import PropTypes from 'prop-types'
import icons from '../../assets/icons'
import style from './CreateEvent.module.scss'

function Users({ invitees }) {
  return (
    <div className={style.invite_box}>
      {invitees.map((user) => (
        <div key={user.id} className={style.invite_user}>
          <div
            style={{
              border: user.status ? '2.5px solid #80DEA0' : '2.5px solid #E03230',
              borderRadius: '50%',
              marginRight: '10px',
            }}
          >
            <img src={icons.avatar} alt="" />
          </div>
          <div>
            <h4>
              {`${user.name} `}
              {user.surname}
            </h4>
            <span>{user.department[0]}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

Users.propTypes = {
  invitees: PropTypes.array,
}

export default Users
