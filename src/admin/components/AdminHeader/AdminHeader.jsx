import React, { useState } from 'react'
import { Space, Select, Dropdown, Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import icons from '../../../assets/icons'
import style from './AdminHeader.module.scss'
import {
  setCreate,
  setDepartment,
  setOrganization,
  setPosition,
  setCreateUser,
  setSearchUser,
} from '../../../store/admin/adminReducer'

const { Option } = Select

function AdminHeader() {
  const location = useLocation()
  const active = location.pathname.split('/').pop()
  const dispatch = useDispatch()
  const [position, setPos] = useState('')
  const [department, setDep] = useState('')
  const [organization, setOrg] = useState('')
  const [user, setUser] = useState('')

  const submitSearch = () => {
    dispatch(setPosition(position))
    dispatch(setDepartment(department))
    dispatch(setOrganization(organization))
    dispatch(setSearchUser(user))
    dispatch(setCreate(''))
    dispatch(setCreateUser(false))
  }
  const clearSearch = () => {
    dispatch(setPosition(''))
    dispatch(setDepartment(''))
    dispatch(setOrganization(''))
    dispatch(setSearchUser(''))
    setPos('')
    setDep('')
    setOrg('')
    setUser('')
  }
  const handleClick = (e) => {
    dispatch(setCreate(e.key))
  }
  const menu = (
    <Menu
      onClick={handleClick}
      items={[
        {
          label: <span>Организация</span>,
          key: 'organization',
        },
        {
          label: <span>Отдел</span>,
          key: 'department',
        },
        {
          label: <span>Должность</span>,
          key: 'position',
        },
      ]}
    />
  )
  return (
    <div className={style.header}>
      {active === 'users' ? (
        <div className={style.select_wrapper}>
          <Space className="select_full_width">
            <Select
              placeholder="Пользователь"
              value={user || undefined}
              onChange={(value) => setUser(value)}
              className="general_select admin_select"
            >
              <Option value="Bektemir Kudaiberdiev">Bektemir Kudaiberdiev</Option>
              <Option value="Cristiano Ronaldo">Cristiano Ronaldo</Option>
              <Option value="Lionel Messi">Lionel Messi</Option>
            </Select>
          </Space>
        </div>
      ) : null}
      <div className={style.select_wrapper}>
        <Space className="select_full_width">
          <Select
            placeholder="Организация"
            value={organization || undefined}
            onChange={(value) => setOrg(value)}
            className="general_select admin_select"
          >
            <Option value="Megalab">Megalab</Option>
            <Option value="Megacom">Megacom</Option>
            <Option value="Единорожки">Единорожки</Option>
          </Select>
        </Space>
      </div>
      <div className={style.select_wrapper}>
        <Space className="select_full_width">
          <Select
            placeholder="Отдел"
            value={department || undefined}
            onChange={(value) => setDep(value)}
            className="general_select admin_select"
          >
            <Option value="Отдел разработок">Отдел разработок</Option>
            <Option value="Отдел продаж">Отдел продаж</Option>
            <Option value="Отдел по работе с клиентами">Отдел по работе с клиентами</Option>
          </Select>
        </Space>
      </div>
      <div className={style.select_wrapper}>
        <Space className="select_full_width">
          <Select
            placeholder="Должность"
            value={position || undefined}
            onChange={(value) => setPos(value)}
            className="general_select admin_select"
          >
            <Option value="Frontend разработчик">Frontend разработчик</Option>
            <Option value="Backend разработчик">Backend разработчик</Option>
            <Option value="Android разработчик">Android разработчик</Option>
          </Select>
        </Space>
      </div>
      <button onClick={submitSearch} className={style.search_btn} type="button">
        <img src={icons.whiteSearchSVG} alt="" />
      </button>
      <button onClick={clearSearch} className={style.refresh_btn} type="button">
        <img src={icons.refreshSVG} alt="" />
      </button>
      {active === 'admin' ? (
        <Dropdown overlayClassName="calendar_dropdown" overlay={menu} trigger={['click']}>
          <Space>
            <button className={style.header_btn} type="button">
              + Создать
            </button>
          </Space>
        </Dropdown>
      ) : (
        <button
          onClick={() => dispatch(setCreateUser(true))}
          className={style.header_btn}
          type="button"
        >
          + Пригласить
        </button>
      )}
    </div>
  )
}

export default AdminHeader
