/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState } from 'react'
import { Space, Select, Dropdown, Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import icons from '../../../assets/icons'
import style from './AdminHeader.module.scss'
import {
  setSearchAction,
  setCreate,
  setInviteUser,
  setCreateRoom,
  refreshSearch,
} from '../../../store/adminSlice'

const { Option } = Select

function AdminHeader() {
  const organizations = useSelector((state) => state.organizations.organizations)
  const departments = useSelector((state) => state.departments.departments)
  const positions = useSelector((state) => state.positions.positions)
  const directions = useSelector((state) => state.directions.directions)
  const users = useSelector((state) => state.users.users)
  const rooms = useSelector((state) => state.rooms.rooms)
  const location = useLocation()
  const active = location.pathname.split('/').pop()
  const dispatch = useDispatch()

  const [search, setSearch] = useState({
    position: '',
    department: '',
    organization: '',
    user: '',
    direction: '',
    roomName: '',
    capacity: '',
    description: '',
  })

  const submitSearch = () => {
    dispatch(setSearchAction(search))
    dispatch(setCreate(''))
    dispatch(setInviteUser(false))
    dispatch(setCreateRoom(false))
  }
  const clearSearch = () => {
    setSearch({
      position: '',
      department: '',
      organization: '',
      user: '',
      direction: '',
      roomName: '',
      capacity: '',
      description: '',
    })
    dispatch(refreshSearch())
  }
  const { position, department, organization, user, direction, roomName, capacity } = search
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
          label: <span>Дирекций</span>,
          key: 'direction',
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
      {active !== 'rooms' ? (
        <>
          {active === 'users' ? (
            <div className={style.select_wrapper}>
              <Space className="select_full_width">
                <Select
                  placeholder="Пользователь"
                  value={user || undefined}
                  onChange={(value) => setSearch({ ...search, user: value })}
                  className="general_select admin_select"
                  showSearch
                  optionFilterProp="children"
                  filterSort={(input, option) => option.children.includes(input)}
                >
                  {users.map((user) => (
                    <Option key={user.id} value={user.name}>
                      {user.name}
                      <span style={{ display: 'inline-block', width: '4px' }} />
                      {user.surname}
                    </Option>
                  ))}
                </Select>
              </Space>
            </div>
          ) : null}
          {active === 'admin' ? (
            <div className={style.select_wrapper}>
              <Space className="select_full_width">
                <Select
                  placeholder="Организация"
                  value={organization || undefined}
                  showSearch
                  optionFilterProp="children"
                  filterSort={(input, option) => option.children.includes(input)}
                  onChange={(value) => setSearch({ ...search, organization: value })}
                  className="general_select admin_select"
                >
                  {organizations.map((item) => (
                    <Option key={item.id} value={item.name}>
                      {item.name}
                    </Option>
                  ))}
                </Select>
              </Space>
            </div>
          ) : null}
          <div className={style.select_wrapper}>
            <Space className="select_full_width">
              <Select
                placeholder="Дирекция"
                value={direction || undefined}
                onChange={(value) => setSearch({ ...search, direction: value })}
                className="general_select admin_select"
                showSearch
                optionFilterProp="children"
                filterSort={(input, option) => option.children.includes(input)}
              >
                {directions.map((item) => (
                  <Option key={item.id} value={item.name}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Space>
          </div>
          <div className={style.select_wrapper}>
            <Space className="select_full_width">
              <Select
                placeholder="Отдел"
                value={department || undefined}
                onChange={(value) => setSearch({ ...search, department: value })}
                className="general_select admin_select"
                showSearch
                optionFilterProp="children"
                filterSort={(input, option) => option.children.includes(input)}
              >
                {departments.map((item) => (
                  <Option key={item.id} value={item.name}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Space>
          </div>
          <div className={style.select_wrapper}>
            <Space className="select_full_width">
              <Select
                placeholder="Должность"
                value={position || undefined}
                onChange={(value) => setSearch({ ...search, position: value })}
                className="general_select admin_select"
                showSearch
                optionFilterProp="children"
                filterSort={(input, option) => option.children.includes(input)}
              >
                {positions.map((item) => (
                  <Option key={item.id} value={item.name}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Space>
          </div>
        </>
      ) : (
        <>
          <div className={style.select_wrapper}>
            <Space className="select_full_width">
              <Select
                placeholder="Название помещение"
                onChange={(value) => setSearch({ ...search, roomName: value })}
                className="general_select admin_select"
                value={roomName || undefined}
              >
                {rooms.map((item) => (
                  <Option key={item.id}>{item.name}</Option>
                ))}
              </Select>
            </Space>
          </div>
          <div className={style.select_wrapper}>
            <Space className="select_full_width">
              <Select
                placeholder="Вместимость количество"
                onChange={(value) => setSearch({ ...search, capacity: value })}
                value={capacity || undefined}
                className="general_select admin_select"
              >
                {rooms.map((item) => (
                  <Option key={item.id}>{item.capacity}</Option>
                ))}
              </Select>
            </Space>
          </div>
          <div className={style.select_wrapper}>
            <Space className="select_full_width">
              <Select
                placeholder="Описание"
                onChange={(value) => setSearch({ ...search, description: value })}
                className="general_select admin_select"
                value={search.description || undefined}
              >
                {rooms.map((item) => (
                  <Option key={item.id}>{item.description}</Option>
                ))}
              </Select>
            </Space>
          </div>
        </>
      )}
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
      ) : null}
      {active === 'users' ? (
        <button
          onClick={() => dispatch(setInviteUser(true))}
          className={style.header_btn}
          type="button"
        >
          + Пригласить
        </button>
      ) : null}
      {active === 'rooms' ? (
        <button
          onClick={() => dispatch(setCreateRoom(true))}
          className={style.header_btn}
          type="button"
        >
          + Cоздать
        </button>
      ) : null}
    </div>
  )
}

export default AdminHeader
