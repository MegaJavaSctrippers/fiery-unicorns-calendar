import React from 'react'
import classNames from 'classnames'
import icons from '../../assets/icons'
import style from './Invitation.module.scss'

function InivitationItem() {
  return (
    <div
      className={classNames('d-flex align-items-center justify-content-between', style.popup_user)}
    >
      <div className="d-flex align-items-center">
        <div className={style.avatar_border}>
          <img src={icons.avatar} alt="" />
        </div>
        <h2>Jenny Wilson</h2>
      </div>
      <span>Проект-менеджер</span>
      <span>Отдел разработок</span>
      <button className={style.delegate_btn} type="button">
        Делегировать
      </button>
    </div>
  )
}

export default InivitationItem
