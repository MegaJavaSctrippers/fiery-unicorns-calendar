import React from 'react'
import icons from '../../assets/icons'
import style from './CreateEvent.module.scss'

function Users(props) {
  console.log(props)
  return (
    <div className={style.invite_box}>
      <div className={style.invite_user}>
        <img src={icons.avatar} alt="" />
        <div>
          <h4>Jenny Wilson</h4>
          <span>Intern</span>
        </div>
      </div>
      <div className={style.invite_user}>
        <img src={icons.avatar} alt="" />
        <div>
          <h4>Jenny Wilson</h4>
          <span>Intern</span>
        </div>
      </div>
    </div>
  )
}

export default Users
