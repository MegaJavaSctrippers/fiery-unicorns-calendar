import React from 'react'
import { Space, Select, Dropdown, Menu } from 'antd'
import icons from '../../../assets/icons'
import style from './AdminHeader.module.scss'

const { Option } = Select

function AdminHeader() {
  const menu = (
    <Menu
      items={[
        {
          label: <span>Организация</span>,
          key: '0',
        },
        {
          label: <span>Отдел</span>,
          key: '1',
        },
        {
          label: <span>Должность</span>,
          key: '3',
        },
      ]}
    />
  )
  return (
    <div className={style.header}>
      <div className={style.select_wrapper}>
        <Space className="select_full_width">
          <Select defaultValue="Организация" className="general_select admin_select">
            <Option value="1">Megalab</Option>
            <Option value="2">Megacom</Option>
            <Option value="3">Единорожки</Option>
          </Select>
        </Space>
      </div>
      <div className={style.select_wrapper}>
        <Space className="select_full_width">
          <Select defaultValue="Отдел разработок" className="general_select admin_select">
            <Option value="1">Отдел разработок</Option>
            <Option value="2">Отдел продаж</Option>
            <Option value="3">Отдел по работе с клиентами</Option>
          </Select>
        </Space>
      </div>
      <div className={style.select_wrapper}>
        <Space className="select_full_width">
          <Select defaultValue="Должность" className="general_select admin_select">
            <Option value="1">Frontend разработчик</Option>
            <Option value="2">Backend разработчик</Option>
            <Option value="3">Android разработчик</Option>
          </Select>
        </Space>
      </div>
      <button className={style.search_btn} type="button">
        <img src={icons.whiteSearchSVG} alt="" />
      </button>
      <button className={style.refresh_btn} type="button">
        <img src={icons.refreshSVG} alt="" />
      </button>
      <Dropdown overlayClassName="calendar_dropdown" overlay={menu} trigger={['click']}>
        <Space>
          <button className={style.header_btn} type="button">
            + Создать
          </button>
        </Space>
      </Dropdown>
    </div>
  )
}

export default AdminHeader
