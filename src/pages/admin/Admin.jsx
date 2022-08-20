import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminSideBar from './components/AdminSideBar/AdminSideBar'
import style from './Admin.module.scss'
import './assets/admin.css'
import AdminHeader from './components/AdminHeader/AdminHeader'
import withAccess from '../../hoc/withAccess'
import withAuth from '../../hoc/withAuth'
import { getPositions } from '../../store/actions/positionAction'
import { getDepartments } from '../../store/actions/departmentAction'
import { getOrganizations } from '../../store/actions/organizationAction'
import { getUsers } from '../../store/actions/userAction'
import { getDirections } from '../../store/actions/directionAction'

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
