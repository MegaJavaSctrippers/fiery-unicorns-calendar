import React, { useState } from 'react'
import { Select, Space } from 'antd'

const { Option } = Select

function CreateDirection() {
  const [formData, setFormData] = useState({
    direction: '',
    director: '',
    organization: '',
  })
  const { direction, director, organization } = formData
  const enabled = direction.length > 0 && director.length > 0 && organization.length > 0
  const handleChange = (e) => {
    setFormData({ ...formData, direction: e.target.value })
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
          <input
            onChange={handleChange}
            value={direction}
            name="direction"
            className="create_input"
          />
        </div>
        <div className="create_form">
          <span className="create_label">Директор</span>
          <Space>
            <Select
              onChange={(value) => setFormData({ ...formData, director: value })}
              value={direction}
              name="director"
              className="general_select create_select"
            >
              <Option value="1">Bektemir Kudaiberdiev</Option>
              <Option value="2">Cristiano Ronaldo</Option>
              <Option value="3">Lionel Messi</Option>
            </Select>
          </Space>
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

export default CreateDirection
