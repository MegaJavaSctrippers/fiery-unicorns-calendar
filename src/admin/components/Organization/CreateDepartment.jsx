import React, { useState } from 'react'
import { Select, Space } from 'antd'

const { Option } = Select

function CreateDepartment() {
  const [formData, setFormData] = useState({
    department: '',
    direction: '',
    head: '',
  })
  const { direction, department, head } = formData
  const enabled = direction.length > 0 && department.length > 0 && head.length > 0
  const handleChange = (e) => {
    setFormData({ ...formData, department: e.target.value })
  }
  return (
    <div>
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
          <span className="create_label">Дирекция</span>
          <Space>
            <Select
              onChange={(value) => setFormData({ ...formData, direction: value })}
              value={direction}
              name="direction"
              className="general_select create_select"
            >
              <Option value="1">Megalab</Option>
              <Option value="2">Megacom</Option>
              <Option value="3">Единорожки</Option>
            </Select>
          </Space>
        </div>
        <div className="create_form">
          <span className="create_label">Руководитель отдела</span>
          <Space>
            <Select
              onChange={(value) => setFormData({ ...formData, head: value })}
              value={head}
              name="head"
              className="general_select create_select"
            >
              <Option value="1">Bektemir Kudaiberdiev</Option>
              <Option value="2">Cristiano Ronaldo</Option>
              <Option value="3">Lionel Messi</Option>
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
