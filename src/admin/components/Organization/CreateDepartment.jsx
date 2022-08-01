import React, { useState } from 'react'
import { Select, Space } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import api from '../../../services/api'
import SuccessAlert from '../Alerts/SuccessAlert'
import { success } from '../../../services/success'
import { setCreate } from '../../../store/adminSlice'

const { Option } = Select

function CreateDepartment() {
  const users = useSelector((state) => state.users.users)
  const directions = useSelector((state) => state.directions.directions)
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: '',
    direction: '',
    head: '',
  })
  const { direction, name, head } = formData
  const enabled = name.length > 0 && direction.toString().length > 0 && head.toString().length > 0

  const handleChange = (e) => {
    setFormData({ ...formData, name: e.target.value })
  }
  const onSubmit = async () => {
    await api
      .post('/create/departments/', {
        name,
        direction,
        manager: head,
      })
      .then(() => {
        dispatch(setCreate(''))
        success(<SuccessAlert text="Отдел успешно создан" />)
        setFormData({
          name: '',
          direction: '',
          head: '',
        })
      })
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
          <input onChange={handleChange} value={name} name="name" className="create_input" />
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
              {users.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Space>
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
              {directions.map((item) => (
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

export default CreateDepartment
