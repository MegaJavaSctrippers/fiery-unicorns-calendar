import React, { useState } from 'react'
import { Select, Space } from 'antd'
import { useSelector } from 'react-redux'
import api from '../../../services/api'
import SuccessAlert from '../Alerts/SuccessAlert'
import { success } from '../../../services/success'

const { Option } = Select

function CreateDirection() {
  const users = useSelector((state) => state.users.users)
  const organizations = useSelector((state) => state.organizations.organizations)
  const [formData, setFormData] = useState({
    name: '',
    director: '',
    org: '',
  })
  const { name, director, org } = formData
  const handleChange = (e) => {
    setFormData({ ...formData, name: e.target.value })
  }

  const enabled = name.length > 0 && director.toString().length > 0 && org.toString().length > 0
  const onSubmit = async () => {
    await api
      .post('/create/directions/', {
        name,
        organization: org,
        director,
      })
      .then(() => {
        setFormData({
          name: '',
          director: '',
          org: '',
        })
        success(<SuccessAlert text="Дирекция успешна создана" />)
      })
  }
  return (
    <div>
      <div className="create_title">
        Создать:
        <span>Дирекциий</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название дирекций</span>
          <input onChange={handleChange} value={name} name="direction" className="create_input" />
        </div>
        <div className="create_form">
          <span className="create_label">Директор</span>
          <Space>
            <Select
              onChange={(value) => setFormData({ ...formData, director: value })}
              value={director}
              name="director"
              className="general_select create_select"
            >
              {users.map((user) => (
                <Option key={user.id} value={user.id}>
                  {user.name}
                </Option>
              ))}
            </Select>
          </Space>
        </div>
        <div className="create_form">
          <span className="create_label">Организация</span>
          <Space>
            <Select
              onChange={(value) => setFormData({ ...formData, org: value })}
              value={org}
              name="organization"
              className="general_select create_select"
            >
              {organizations.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Space>
        </div>
        <button disabled={!enabled} onClick={onSubmit} className="create_btn" type="button">
          Сохранить
        </button>
      </div>
    </div>
  )
}

export default CreateDirection
