import React, { useState } from 'react'
import { Space, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../../../services/api'
import SuccessAlert from '../Alerts/SuccessAlert'
import { success } from '../../../../services/success'
import { setCreate } from '../../../../store/slices/adminSlice'
import { getOrganizations } from '../../../../store/actions/organizationAction'

const { Option } = Select

function CreateOrganization() {
  const users = useSelector((state) => state.users.users)
  const [formData, setFormData] = useState({
    name: '',
    admin: '',
  })
  const dispatch = useDispatch()
  const { name, admin } = formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const onSubmit = async () => {
    await api.post('/organizations/', formData).then(() => {
      dispatch(setCreate(''))
      dispatch(getOrganizations())
      success(<SuccessAlert text="Организация создана" />)
      setFormData({ name: '', admin: '' })
    })
  }
  const enabled = name.length > 0
  return (
    <div>
      <div className="create_title">
        Создать:
        <span>Организацию</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название Организаций</span>
          <input onChange={handleChange} value={name} name="name" className="create_input" />
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
              {users.map((user) => (
                <Option key={user.id}>
                  {user.name}
                  <span className="px-2">{user.surname}</span>
                </Option>
              ))}
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
