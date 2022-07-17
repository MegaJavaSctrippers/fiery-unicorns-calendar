import React, { useState } from 'react'
import { Select, Space } from 'antd'
import style from './CreateDepartment.module.scss'

const { Option } = Select

function CreateDepartment() {
  const [formData, setFormData] = useState({
    department: '',
    organization: '',
  })
  const { organization, department } = formData
  const enabled = organization.length > 0 && department.length > 0
  const handleChange = (e) => {
    setFormData({ ...formData, department: e.target.value })
  }
  return (
    <div className={style.position}>
      <div className="create_title">
        Создать:
        <span>Отдел</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название отдела</span>
          <input
            onChange={handleChange}
            value={department}
            name="department"
            className="create_input"
          />
        </div>
        <div className="create_form">
          <span className="create_label">Организация</span>
          <Space>
            <Select
              onChange={(value) => setFormData({ ...formData, organization: value })}
              value={organization}
              name="organization"
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

export default CreateDepartment
