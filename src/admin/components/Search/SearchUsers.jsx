import React, { useEffect, useState } from 'react'
import { Space, Select } from 'antd'
import axios from 'axios'
import { useSelector } from 'react-redux'
import icons from '../../../assets/icons'

const { Option } = Select

function Position() {
  const [edit, setEdit] = useState(false)
  const user = useSelector((state) => state.admin.search.user)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      await axios.get('https://checkit24.herokuapp.com/api/users/').then((res) => {
        setUsers(res.data)
        console.log(res.data)
      })
    }
    getUsers()
  }, [])

  return (
    <>
      <div className="create_title">
        {edit ? 'Редактировать :' : 'Поиск :'}
        <span>Bektemir Kudaiberdiev</span>
      </div>
      {users
        .filter((item) => item.name.includes(user))
        .map((item) => (
          <div key={item.id} className="create_box">
            <div className="create_form">
              <span className="create_label">ФИО пользователя</span>
              {edit ? (
                <input
                  onChange={() => console.log('j')}
                  value={item.name}
                  name="name"
                  className="create_input"
                />
              ) : (
                <div className="create_div">{item.name}</div>
              )}
            </div>
            <div className="create_form">
              <span className="create_label">Отдел пользователя</span>
              {edit ? (
                <Space>
                  <Select
                    onChange={(value) => console.log(value)}
                    value={item.positions[0]?.department.name}
                    name="department"
                    className="general_select create_select"
                  >
                    <Option value="1">Отдел разработок</Option>
                    <Option value="2">Отдел продаж</Option>
                    <Option value="3">Отдел по работе с клиентами</Option>
                  </Select>
                </Space>
              ) : (
                <div className="create_div">{item.positions[0]?.department.name}</div>
              )}
            </div>
            <div className="create_form">
              <span className="create_label">Должность</span>
              {edit ? (
                <Space>
                  <Select
                    onChange={(value) => console.log(value)}
                    value={item.positions[0]?.position.name}
                    name="position"
                    className="general_select create_select"
                  >
                    <Option value="1">Frontend разработчик</Option>
                    <Option value="2">Backend разработчик</Option>
                    <Option value="3">UX/UI дизайнер </Option>
                  </Select>
                </Space>
              ) : (
                <div className="create_div">{item.positions[0]?.position.name}</div>
              )}
            </div>
            {!edit ? (
              <div className="create_form">
                <span className="create_label">Email</span>
                <div className="create_div">{item.email}</div>
              </div>
            ) : null}
            {edit ? (
              <button className="create_btn" type="button">
                Сохранить
              </button>
            ) : null}
            <button onClick={() => setEdit(!edit)} type="button" className="edit_icon">
              <img src={icons.editSVG} alt="" />
            </button>
            <button type="button" className="delete_icon">
              <img src={icons.deleteSVG} alt="" />
            </button>
          </div>
        ))}
    </>
  )
}

export default Position
