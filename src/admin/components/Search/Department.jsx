import React from 'react'
import icons from '../../../assets/icons'

function Department() {
  return (
    <>
      <div className="create_title">
        Поиск:
        <span>Отдел разработок</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Отдел</span>
          <div className="create_div">Отдел разработок</div>
        </div>
        <div className="create_form">
          <span className="create_label">Руаоводитель отделa</span>
          <div className="create_div">Асанов Тилек Асанович</div>
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

export default Department
