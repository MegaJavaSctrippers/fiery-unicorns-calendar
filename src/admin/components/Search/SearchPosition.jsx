import React, { useState } from 'react'
import { Space, Select } from 'antd'
import icons from '../../../assets/icons'

const { Option } = Select
function Position() {
  const [edit, setEdit] = useState(false)
  return (
    <>
      <div className="create_title">
        {edit ? 'Редактировать :' : 'Поиск :'}
        <span>Frontend разработчик</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Должность</span>
          {edit ? (
            <input
              onChange={() => console.log('j')}
              value=""
              name="position"
              className="create_input"
              id="position"
            />
          ) : (
            <div className="create_div">Frontend разработчик</div>
          )}
        </div>
        <div className="create_form">
          <span className="create_label">Отдел</span>
          {edit ? (
            <Space>
              <Select
                onChange={(value) => console.log(value)}
                value=""
                name="department"
                className="general_select create_select"
              >
                <Option value="1">Отдел разработок</Option>
                <Option value="2">Отдел продаж</Option>
                <Option value="3">Отдел по работе с клиентами</Option>
              </Select>
            </Space>
          ) : (
            <div className="create_div">Отдел разработок</div>
          )}
        </div>
        {!edit ? (
          <div className="create_form">
            <span className="create_label">Организация</span>
            <div className="create_div">Megalab</div>
            {/* {edit ? (
              <Space>
                <Select
                  onChange={(value) => console.log(value)}
                  value=""
                  name="department"
                  className="general_select create_select"
                >
                  <Option value="1">Отдел разработок</Option>
                  <Option value="2">Отдел продаж</Option>
                  <Option value="3">Отдел по работе с клиентами</Option>
                </Select>
              </Space>
            ) : (
              <div className="create_div">Megalab</div>
            )} */}
          </div>
        ) : null}
        {edit ? (
          <button className="create_btn" onClick={() => console.log('heelo')} type="button">
            Сохранить
          </button>
        ) : null}
        <button onClick={() => setEdit(!edit)} type="button" className="edit_icon">
          {edit ? <img src={icons.editBlackSVG} alt="" /> : <img src={icons.editSVG} alt="" />}
        </button>
        <button type="button" className="delete_icon">
          <img src={icons.deleteSVG} alt="" />
        </button>
      </div>
    </>
  )
}

export default Position
