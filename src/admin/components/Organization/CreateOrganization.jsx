import React, { useState } from 'react'
import { Space, Select } from 'antd'

const { Option } = Select

function CreateOrganization() {
  const [formData, setFormData] = useState({
    organization: '',
    admin: '',
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const { organization, admin } = formData
  const enabled = organization.length > 0 && admin.length > 0
  return (
    <div>
      <div className="create_title">
        Создать:
        <span>Организацию</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название Организаций</span>
          <input
            onChange={handleChange}
            value={organization}
            name="organization"
            className="create_input"
          />
        </div>
        <div className="create_form">
          <span className="create_label">Админстратор организации</span>
          <Space>
            <Select
              onChange={(value) => setFormData({ ...formData, admin: value })}
              value={admin}
              name="direction"
              className="general_select create_select"
            >
              <Option value="1">Megalab</Option>
              <Option value="2">Megacom</Option>
              <Option value="3">Единорожки</Option>
            </Select>
          </Space>
        </div>
        <button disabled={!enabled} className="create_btn" type="button">
          Сохранить
        </button>
      </div>
    </div>
  )
}

export default CreateOrganization
