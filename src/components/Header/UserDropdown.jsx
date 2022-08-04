import React from 'react'
import PropTypes from 'prop-types'
import icons from '../../assets/icons'
import EditProfile from '../../modals/EditProfile/EditProfile'
import style from './UserDropdown.module.scss'

function UserDropdown({ user }) {
  console.log(user)
  return (
    <div className={style.user_dropdown}>
      <div className={style.user_avatar}>
        <img src={icons.collectionSVG} alt="" />
        <span data-bs-toggle="modal" data-bs-target="#edit">
          Изменить данные
        </span>
      </div>
      <h3>{user.name}</h3>
      <span>{user.email}</span>
      <ul>
        <li>
          <img src={icons.profileSVG} alt="" />
          {user.name}
        </li>
        <li>
          <img src={icons.folderSVG} alt="" />
          {/* {user.positions[0].position.name} */}
        </li>
        <li>
          <img src={icons.clockSVG} alt="" />
          {/* {user.positions[0]?.department.name} */}
        </li>
        <li>
          <img src={icons.jobSVG} alt="" />
          {user.email}
        </li>
      </ul>
      <EditProfile />
    </div>
  )
}
UserDropdown.propTypes = {
  user: PropTypes.object,
}
export default UserDropdown
