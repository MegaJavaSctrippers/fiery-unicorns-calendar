import React from 'react'
import classNames from 'classnames'
import icons from '../../assets/icons'
import style from './Labels.module.scss'

function Labels() {
  return (
    <div className={style.labels}>
      <div className={style.labels_header}>
        <h2 className={style.labels_title}>Мои метки</h2>
        <div className={style.labels_add}>
          <img src={icons.plusSVG} alt="" />
        </div>
      </div>

      <div className="d-flex align-items-center mb-1">
        <span className={classNames(style.labels_color, style.labels_private)}> </span>
        Личный
      </div>
      <div className="d-flex align-items-center mb-1">
        <span className={classNames(style.labels_color, style.labels_work)}> </span>
        Рабочий
      </div>
      <div className="d-flex align-items-center mb-1">
        <span className={classNames(style.labels_color, style.labels_party)}> </span>
        Мероприятия
      </div>
      <div className="d-flex align-items-center mb-1">
        <span className={classNames(style.labels_color, style.labels_project)}> </span>
        Проекты
      </div>
    </div>
  )
}

export default Labels
