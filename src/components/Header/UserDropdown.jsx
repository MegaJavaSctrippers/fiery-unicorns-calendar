import React from 'react'
import icons from '../../assets/icons'
import EditProfile from '../../modals/EditProfile/EditProfile'
import style from './UserDropdown.module.scss'

function UserDropdown() {
  return (
    <div className={style.user_dropdown}>
      <div className={style.user_avatar}>
        <img src={icons.collectionSVG} alt="" />
        <span data-bs-toggle="modal" data-bs-target="#edit">
          Изменить данные
        </span>
      </div>
      <h3>Jenny Wilson Jennfh</h3>
      <span>alogin@gmail.com</span>
      <ul>
        <li>
          <img src={icons.profileSVG} alt="" />
          Jenny Wilson Jennfh
        </li>
        <li>
          <img src={icons.folderSVG} alt="" />
          Проект-менеджер Megacom
        </li>
        <li>
          <img src={icons.clockSVG} alt="" />
          Отдел разработок
        </li>
        <li>
          <img src={icons.jobSVG} alt="" />
          alogin@gmail.com
        </li>
      </ul>
      <EditProfile />
    </div>
  )
}

export default UserDropdown
