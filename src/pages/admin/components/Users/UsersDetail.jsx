import React, { useEffect, useState } from 'react'
import { Space, Select } from 'antd'
import { useParams } from 'react-router-dom'
import api from '../../../../services/api'
import style from './Users.module.scss'

const { Option } = Select

function UsersDetail() {
  const { id } = useParams()
  const [user, setUser] = useState('')
  useEffect(() => {
    const getUserDetail = async () => {
      await api(`/users/${id}`).then((res) => {
        setUser(res.data)
        console.log(res.data)
      })
    }
    getUserDetail()
  }, [])
  return (
    <div className={style.users}>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Имя</span>
          <input
            onChange={() => console.log('j')}
            value={user.name}
            name="direction"
            className="create_input"
          />
        </div>
        <div className="create_form">
          <span className="create_label">Фамилия</span>
          <input
            onChange={() => console.log('j')}
            value={user.surname}
            name="direction"
            className="create_input"
          />
        </div>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Отчество</span>
          <input
            onChange={() => console.log('j')}
            value={user.middlename}
            name="direction"
            className="create_input"
          />
        </div>
        <div className="create_form">
          <span className="create_label">Должность</span>
          <Space>
            <Select
              onChange={(value) => console.log(value)}
              value={user.positions ? user.positions[0].position.name : null}
              name="director"
              className="general_select create_select"
            >
              <Option value="1">Асанов Тилек Асанович</Option>
              <Option value="2">Bektemir Kudaiberdiev</Option>
              <Option value="3">Cristiano Ronaldo</Option>
            </Select>
          </Space>
        </div>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Отдел</span>
          <Space>
            <Select
              onChange={(value) => console.log(value)}
              value={user.positions ? user.positions[0].department.name : null}
              name="director"
              className="general_select create_select"
            >
              <Option value="1">Асанов Тилек Асанович</Option>
              <Option value="2">Bektemir Kudaiberdiev</Option>
              <Option value="3">Cristiano Ronaldo</Option>
            </Select>
          </Space>
        </div>
      </div>
      <button className="create_btn mt-5" type="button">
        Сохранить
      </button>
    </div>
  )
}

export default UsersDetail
