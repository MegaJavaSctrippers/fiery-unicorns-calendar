import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Space, Select } from 'antd'
import icons from '../../assets/icons'
import style from './EditProfile.module.scss'

const { Option } = Select

function EditProfile({ user }) {
  return (
    <div
      className={classNames('modal fade', style.edit_profile)}
      id="edit-profile"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '550px' }}>
        <div className="modal-content profile-content">
          <div className={style.edit_header}>
            <h5>Реадктирование профиля</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              data-bs-dismiss="modal"
            />
          </div>
          <form className={style.edit_body}>
            <div className={style.edit_photo}>
              <img src={icons.collectionSVG} alt="" />
              <button type="button">Изменить фото</button>
            </div>
            <div className="d-flex">
              <div style={{ width: '50%', marginRight: '16px' }} className={style.edit_input}>
                <label htmlFor="#surname">
                  Фамилия
                  <input id="surname" value={user.surname} />
                </label>
                <label htmlFor="#middlename">
                  Отчество
                  <input id="middlename" value={user.middlename} />
                </label>
                <label htmlFor="job">
                  <span className={style.span}>Отдел</span>
                  <input className="d-none" />
                  <Space id="job" className="select_full_width mt-1">
                    <Select
                      value={user.positions ? user.positions[0].department.name : null}
                      className="general_select profile_select"
                    >
                      <Option>Frontend developer</Option>
                      <Option>Backend developer</Option>
                      <Option>Android developer</Option>
                    </Select>
                  </Space>
                </label>
                <label htmlFor="#password">
                  Пароль
                  <input type="password" id="password" />
                </label>
              </div>
              <div style={{ width: '50%' }} className={style.edit_input}>
                <label htmlFor="#name">
                  Имя
                  <input id="name" value={user.name} />
                </label>
                <label htmlFor="#email">
                  Email
                  <input id="email" value={user.email} />
                </label>
                <label htmlFor="job">
                  <span className={style.span}>Должность</span>
                  <input className="d-none" />
                  <Space id="job" className="select_full_width mt-1">
                    <Select
                      value={user.positions ? user.positions[0].position.name : null}
                      className="general_select profile_select"
                    >
                      <Option>Frontend developer</Option>
                      <Option>Backend developer</Option>
                      <Option>Android developer</Option>
                    </Select>
                  </Space>
                </label>
                <label htmlFor="#newpassword">
                  Новый пароль
                  <input type="password" id="newpassword" />
                </label>
              </div>
            </div>
          </form>
          <div className="d-flex justify-content-end">
            <button className={style.popup_btns} type="button">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

EditProfile.propTypes = {
  user: PropTypes.object,
}
export default EditProfile
