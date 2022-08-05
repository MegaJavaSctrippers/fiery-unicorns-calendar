import React, { useState } from 'react'
import { Select, Space } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import SuccessAlert from '../Alerts/SuccessAlert'
import { success } from '../../../../services/success'
import { setCreate } from '../../../../store/adminSlice'
import { createDirections } from '../../../../store/admin/actions/directions'

const { Option } = Select

function CreateDirection() {
  const users = useSelector((state) => state.users.users)
  const organizations = useSelector((state) => state.organizations.organizations)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    director: '',
    organization: '',
  })
  const { name, director, organization } = formData
  const handleChange = (e) => {
    setFormData({ ...formData, name: e.target.value })
  }

  const e = name.length > 0 && director.toString().length > 0 && organization.toString().length > 0
  const onSubmit = () => {
    try {
      dispatch(createDirections(formData))
      setFormData({
        name: '',
        director: '',
        organization: '',
      })
      dispatch(setCreate(''))
      success(<SuccessAlert text="Дирекция успешна создана" />)
    } catch (e) {
      console.log(e.message)
    }
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
              onChange={(value) => setFormData({ ...formData, organization: value })}
              value={organization}
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
        <button disabled={!e} onClick={onSubmit} className="create_btn" type="button">
          Сохранить
        </button>
      </div>
    </div>
  )
}

export default CreateDirection
