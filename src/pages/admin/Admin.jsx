import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSideBar from './components/AdminSideBar/AdminSideBar'
import style from './Admin.module.scss'
import './assets/admin.css'
import AdminHeader from './components/AdminHeader/AdminHeader'
import withAccess from '../../hoc/withAccess'

function Admin() {
  return (
    <div className={style.admin}>
      <AdminSideBar />
      <div className={style.dashboard}>
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  )
}

export default withAccess(Admin)
