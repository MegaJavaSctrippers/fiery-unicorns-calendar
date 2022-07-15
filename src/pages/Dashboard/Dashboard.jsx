import React from 'react'
import style from './Dashboard.module.scss'
import Header from '../../components/Header/Header'
import CalendarPage from '../../components/Calendar/Calendar'

function Dashboard() {
  return (
    <div className={style.dashboard}>
      <Header />
      <CalendarPage />
    </div>
  )
}

export default Dashboard
