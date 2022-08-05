import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminSideBar from './components/AdminSideBar/AdminSideBar'
import style from './Admin.module.scss'
import './assets/admin.css'
import AdminHeader from './components/AdminHeader/AdminHeader'
import withAccess from '../../hoc/withAccess'
import withAuth from '../../hoc/withAuth'
import { getPositions } from '../../store/admin/actions/positions'
import { getDepartments } from '../../store/admin/actions/departments'
import { getOrganizations } from '../../store/admin/actions/organization'
import { getUsers } from '../../store/admin/actions/users'
import { getDirections } from '../../store/admin/actions/directions'

function Admin() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPositions())
    dispatch(getDepartments())
    dispatch(getOrganizations())
    dispatch(getUsers())
    dispatch(getDirections())
  }, [])
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

export default withAccess(withAuth(Admin))
