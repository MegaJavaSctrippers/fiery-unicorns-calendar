import React, { useState } from 'react'
import { Select, Space } from 'antd'
import style from './CreatePosition.module.scss'

const { Option } = Select

function CreatePosition() {
  const [formData, setFormData] = useState({
    position: '',
    department: '',
  })
  const { position, department } = formData
  const enabled = position.length > 0 && department.length > 0
  const handleChange = (e) => {
    setFormData({ ...formData, position: e.target.value })
  }
  return (
    <div className={style.position}>
      <div className="create_title">
        Создать:
        <span>Должность</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название должности</span>
          <input
            onChange={handleChange}
            value={position}
            name="position"
            className="create_input"
            id="position"
          />
        </div>
        <div className="create_form">
          <span className="create_label">Отдел</span>
          <Space>
            <Select
              onChange={(value) => setFormData({ ...formData, department: value })}
              value={department}
              name="department"
              className="general_select create_select"
            >
              <Option value="1">Отдел разработок</Option>
              <Option value="2">Отдел продаж</Option>
              <Option value="3">Отдел по работе с клиентами</Option>
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

export default CreatePosition
