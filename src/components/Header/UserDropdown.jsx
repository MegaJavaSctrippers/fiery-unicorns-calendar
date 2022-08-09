import React from 'react'
import PropTypes from 'prop-types'
import icons from '../../assets/icons'
import style from './UserDropdown.module.scss'

function UserDropdown({ user }) {
  console.log(user)
  return (
    <div className={style.user_dropdown}>
      <div className={style.user_avatar}>
        <img src={icons.collectionSVG} alt="" />
        <span data-bs-toggle="modal" data-bs-target="#edit-profile">
          Изменить данные
        </span>
      </div>
      <h3>
        {`${user.name} `}
        {user.surname}
      </h3>
      <span>{user.email}</span>
      <ul>
        <li>
          <img src={icons.profileSVG} alt="" />
          {`${user.name} `}
          {user.surname}
        </li>
        <li>
          <img src={icons.folderSVG} alt="" />
          {user.positions ? user.positions[0]?.position.name : null}
        </li>
        <li>
          <img src={icons.clockSVG} alt="" />
          {user.positions ? user.positions[0]?.department.name : null}
        </li>
        <li>
          <img src={icons.jobSVG} alt="" />
          {user.email}
        </li>
      </ul>
    </div>
  )
}
UserDropdown.propTypes = {
  user: PropTypes.object,
}
export default UserDropdown
