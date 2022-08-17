import React from 'react'
import PropTypes from 'prop-types'
import icons from '../../assets/icons'
import style from './CreateEvent.module.scss'

function Users({ invitees }) {
  return (
    <div className={style.invite_box}>
      {invitees.map((user) => (
        <div key={user.id} className={style.invite_user}>
          <img src={icons.avatar} alt="" />
          <div>
            <h4>
              {`${user.name} `}
              {user.surname}
            </h4>
            <span>{user.positions[0]}</span>
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
