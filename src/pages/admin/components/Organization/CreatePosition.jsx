import React, { useState } from 'react'
import { Select, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../../../services/api'
import SuccessAlert from '../Alerts/SuccessAlert'
import { success } from '../../../../services/success'
import { setCreate } from '../../../../store/adminSlice'

const { Option } = Select

function CreatePosition() {
  const departments = useSelector((state) => state.departments.departments)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    department: '',
  })
  const { name, department } = formData
  const enabled = name.length > 0 && department.toString().length > 0
  const handleChange = (e) => {
    setFormData({ ...formData, name: e.target.value })
  }
  const onSubmit = async () => {
    await api
      .post('/create/positions/', {
        name,
        department,
      })
      .then(() => {
        setFormData({
          name: '',
          department: '',
        })
        dispatch(setCreate(''))
        success(<SuccessAlert text="Должность успешна создана" />)
      })
  }
  return (
    <div>
      <div className="create_title">
        Создать:
        <span>Должность</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название должности</span>
          <input
            onChange={handleChange}
            value={name}
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
              {departments.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
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

export default CreatePosition
