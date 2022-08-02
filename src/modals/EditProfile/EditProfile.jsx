import React from 'react'
import classNames from 'classnames'
import icons from '../../assets/icons'
import style from './EditProfile.module.scss'

function EditProfile() {
  return (
    <div
      className={classNames('modal fade', style.edit_profile)}
      id="edit-profile"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '600px' }}>
        <div className="modal-content">
          <div className={style.edit_header}>
            <h5>Реадктирование профиля</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              data-bs-dismiss="modal"
            />
          </div>
          <div className={style.edit_body}>
            <div className={style.edit_photo}>
              <img src={icons.collectionSVG} alt="" />
              <button type="button">Изменить фото</button>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className={style.popup_btns} type="button">
              Пригласить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditProfile
