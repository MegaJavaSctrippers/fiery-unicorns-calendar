import React, { useState } from 'react'
import { Space, Select, Dropdown, Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import icons from '../../../assets/icons'
import style from './AdminHeader.module.scss'
import { setSearchAction, setCreate } from '../../../store/admin/adminReducer'

const { Option } = Select

function AdminHeader() {
  const location = useLocation()
  const active = location.pathname.split('/').pop()
  const dispatch = useDispatch()

  const [search, setSearch] = useState({
    position: '',
    department: '',
    organization: '',
    user: '',
    direction: '',
  })

  const submitSearch = () => {
    dispatch(setSearchAction(search))
    dispatch(setCreate(''))
  }
  const clearSearch = () => {
    setSearch({
      position: '',
      department: '',
      organization: '',
      user: '',
      direction: '',
    })
    dispatch(
      setSearchAction({
        position: '',
        department: '',
        organization: '',
        user: '',
        direction: '',
      }),
    )
  }
  const { position, department, organization, user, direction } = search
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
        {
          label: <span>Дирекции</span>,
          key: 'direction',
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
                >
                  <Option value="Bektemir Kudaiberdiev">Bektemir Kudaiberdiev</Option>
                  <Option value="Cristiano Ronaldo">Cristiano Ronaldo</Option>
                  <Option value="Lionel Messi">Lionel Messi</Option>
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
                  onChange={(value) => setSearch({ ...search, organization: value })}
                  className="general_select admin_select"
                >
                  <Option value="Megalab">Megalab</Option>
                  <Option value="Megacom">Megacom</Option>
                  <Option value="Единорожки">Единорожки</Option>
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
              >
                <Option value="Коммерческая дирекция">Коммерческая дирекция</Option>
                <Option value="Megacom">Дирекция по безопасности</Option>
                <Option value="Единорожки">Дирекция информационных технологий</Option>
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
                onChange={(value) => setSearch({ ...search, position: value })}
                className="general_select admin_select"
              >
                <Option value="Frontend разработчик">Frontend разработчик</Option>
                <Option value="Backend разработчик">Backend разработчик</Option>
                <Option value="Android разработчик">Android разработчик</Option>
              </Select>
            </Space>
          </div>
        </>
      ) : (
        <>
          <div className={style.select_wrapper}>
            <Space className="select_full_width">
              <Select
                placeholder="1 этаж, 4 кабинет"
                value={position || undefined}
                onChange={(value) => console.log(value)}
                className="general_select admin_select"
              >
                <Option value="Frontend разработчик">1 этаж, 4 кабинет</Option>
                <Option value="Backend разработчик">1 этаж, 5 кабинет</Option>
                <Option value="Android разработчик">1 этаж, 6 кабинет</Option>
              </Select>
            </Space>
          </div>
          <div className={style.select_wrapper}>
            <Space className="select_full_width">
              <Select
                placeholder="Вместимость (м2)"
                value={position || undefined}
                onChange={(value) => console.log(value)}
                className="general_select admin_select"
              >
                <Option value="Frontend разработчик">12</Option>
                <Option value="Backend разработчик">23</Option>
                <Option value="Android разработчик">10</Option>
              </Select>
            </Space>
          </div>
          <div className={style.select_wrapper}>
            <Space className="select_full_width">
              <Select
                placeholder="Описание"
                value={position || undefined}
                onChange={(value) => console.log(value)}
                className="general_select admin_select"
              >
                <Option value="Frontend разработчик">Кондиционер, диван, стулья</Option>
                <Option value="Backend разработчик">Кондиционер, диван, стулья</Option>
                <Option value="Android разработчик">Кондиционер, диван, стулья</Option>
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
          onClick={() => console.log('Hello worlds')}
          className={style.header_btn}
          type="button"
        >
          + Пригласить
        </button>
      ) : null}
      {active === 'rooms' ? (
        <button
          onClick={() => console.log('Hello worlds')}
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
