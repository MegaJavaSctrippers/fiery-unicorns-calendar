import React from 'react'
import classNames from 'classnames'
import { Tabs } from 'antd'
import style from './Notification.module.scss'
import NotificationItem from './NotificationItem'

const { TabPane } = Tabs

function Notification() {
  return (
    <div
      className={classNames('modal fade', style.notification)}
      id="notification"
      tabIndex="-1"
      aria-hidden="false"
    >
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '80%' }}>
        <div className={classNames('modal-content notification-content', style.modal_content)}>
          <Tabs>
            <TabPane tab="Входящие" key="1">
              <NotificationItem />
            </TabPane>
            <TabPane tab="Отправленные" key="2">
              <NotificationItem />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Notification
