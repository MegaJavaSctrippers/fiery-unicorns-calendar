/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import icons from '../../assets/icons'
import style from './UserDropdown.module.scss'

function UserDropdown({ user }) {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.setItem('token', null)
    navigate('/signin')
  }
  return (
    <div className={style.user_dropdown}>
      <div className={style.user_avatar}>
        <img src={icons.collectionSVG} alt="" />
        <span data-bs-toggle="modal" data-bs-target="#editProfile">
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
        {!admin ? (
          <>
            <li>
              <img src={icons.folderSVG} alt="" />
              {user.positions ? user.positions[0]?.position.name : null}
            </li>
            <li>
              <img src={icons.clockSVG} alt="" />
              {user.positions ? user.positions[0]?.department.name : null}
            </li>
          </>
        ) : null}
        <li>
          <img src={icons.jobSVG} alt="" />
          {user.email}
        </li>
        {admin ? (
          <li onClick={() => navigate('/admin')} className={style.admin}>
            <img alt="" src={icons.arrowBottomSVG} />
            Перейти в админ
          </li>
        ) : null}
        <li onClick={logout} className={style.logout}>
          Выйти из аккаунта
        </li>
      </ul>
      <span>Powered by CheckIT 2022</span>
    </div>
  )
}
UserDropdown.propTypes = {
  user: PropTypes.object,
}
export default UserDropdown
