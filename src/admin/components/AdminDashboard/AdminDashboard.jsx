import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../AdminHeader/AdminHeader'

import style from './AdminDashboard.module.scss'

function AdminDashboard() {
  return (
    <div className={style.dashboard}>
      <AdminHeader />
      <Outlet />
    </div>
  )
}

export default AdminDashboard
