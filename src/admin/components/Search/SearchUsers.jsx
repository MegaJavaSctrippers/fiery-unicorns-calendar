import React from 'react'
import icons from '../../../assets/icons'

function Position() {
  return (
    <>
      <div className="create_title">
        Поиск:
        <span>Bektemir Kudaiberdiev</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">ФИО пользователя</span>
          <div className="create_div">Bektemir Kudaiberdiev</div>
        </div>
        <div className="create_form">
          <span className="create_label">Отдел пользователя</span>
          <div className="create_div">Отдел разработок</div>
        </div>
        <div className="create_form">
          <span className="create_label">Должность</span>
          <div className="create_div">Frontend разработчик</div>
        </div>
        <div className="create_form">
          <span className="create_label">Email</span>
          <div className="create_div">asantil@gmail.com</div>
        </div>
        <button type="button" className="edit_icon">
          <img src={icons.editSVG} alt="" />
        </button>
        <button type="button" className="delete_icon">
          <img src={icons.deleteSVG} alt="" />
        </button>
      </div>
    </>
  )
}

export default Position
