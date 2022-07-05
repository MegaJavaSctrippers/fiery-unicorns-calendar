import React from 'react'
import classNames from 'classnames'
import style from './Notification.module.scss'
import icons from '../../assets/icons'

function Notification() {
  const week = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div
      className={classNames('modal fade', style.notification)}
      id="notification"
      tabIndex="-1"
      aria-hidden="false"
    >
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '80%' }}>
        <div className="modal-content">
          <div className={style.notification_header}>
            <h3 className="modal-title">Уведомления</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className={style.notification_menu}>
            <span style={{ width: '30%' }}>Название события</span>
            <span style={{ width: '11%' }}>Дата встречи</span>
            <span style={{ width: '13%' }}>Время встречи</span>
            <span style={{ width: '16%' }}>Место встречи</span>
            <span style={{ width: '18%' }}>Отдел</span>
            <span style={{ width: '12%' }}>Статус</span>
          </div>
          {week.map((item) => (
            <div key={item} className={style.notification_content}>
              <div className={style.content_item} style={{ width: '30%' }}>
                <h2>Совещание</h2>
                Darrell Steward
              </div>
              <div className={style.content_item} style={{ width: '11%' }}>
                <span>2022-06-29</span>
                <span>Сегодня</span>
              </div>
              <div className={style.content_item} style={{ width: '13%' }}>
                09:00-10:00
              </div>
              <div className={style.content_item} style={{ width: '16%' }}>
                1 этаж, кабинет 17
              </div>
              <div className={style.content_item} style={{ width: '18%' }}>
                Отдел разработок
              </div>
              <div style={{ width: '12%' }} className={style.content_img}>
                <div>
                  <img src={icons.acceptSVG} alt="" />
                </div>
                <div>
                  <img src={icons.resendSVG} alt="" />
                </div>
                <div>
                  <img src={icons.cancelSVG} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notification
