import { Link } from 'react-router-dom'
import React from 'react'
import icons from '../../../assets/icons'
import style from './AdminSideBar.module.scss'

function AdminSideBar() {
  return (
    <div className={style.sidebar}>
      <div className={style.header}>
        <img className={style.logo} src={icons.calendarSVG} alt="" />
        <h2 className={style.title}>Calendar Admin</h2>
      </div>

      <div className={style.menu}>
        <Link className={style.sidebar_link} to="/admin">
          <img src={icons.organizationSVG} alt="" />
          <span>Организация</span>
        </Link>
        <Link className={style.sidebar_link} to="users">
          <img src={icons.usersSVG} alt="" />
          <span>Пользователи</span>
        </Link>
        <Link className={style.sidebar_link} to="accommodation">
          <img src={icons.roomSVG} alt="" />
          <span>Помещение</span>
        </Link>
      </div>
    </div>
  )
}

export default AdminSideBar
