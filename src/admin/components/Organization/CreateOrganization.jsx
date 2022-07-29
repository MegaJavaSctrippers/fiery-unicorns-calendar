import React, { useState } from 'react'
import { Space, Select } from 'antd'
import api from '../../../services/api'
import SuccessAlert from '../Alerts/SuccessAlert'
import { success } from '../../../services/success'

const { Option } = Select

function CreateOrganization() {
  const [formData, setFormData] = useState({
    organization: '',
    admin: '',
  })
  const { organization, admin } = formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const onSubmit = async () => {
    await api.post('/organizations/', { name: organization }).then(() => {
      success(<SuccessAlert text="Организация создана" />)
      setFormData({ organization: '', admin: '' })
    })
  }
  const enabled = organization.length > 0
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
              <Option value="1">Bektemir Kudaiberdiev</Option>
            </Select>
          </Space>
        </div>
        <button onClick={onSubmit} disabled={!enabled} className="create_btn" type="button">
          Сохранить
        </button>
      </div>
    </div>
  )
}

export default CreateOrganization
