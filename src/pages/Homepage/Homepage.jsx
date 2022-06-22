import React from 'react'
import style from './Homepage.module.scss'
import SideBar from '../../components/SideBar/SideBar'
import Dashboard from '../Dashboard/Dashboard'

function Homepage() {
  return (
    <div className={style.homepage}>
      <SideBar />
      <Dashboard />
    </div>
  )
}

export default Homepage
