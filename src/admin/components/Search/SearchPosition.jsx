import React from 'react'
import { useSelector } from 'react-redux'
import icons from '../../../assets/icons'

function SearchPosition() {
  const position = useSelector((state) => state.admin.searchPosition)
  return (
    <div>
      <div className="create_title">
        Поиск:
        <span>{position}</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название должности</span>
          <div className="create_div">{position}</div>
        </div>
        <div className="create_form">
          <span className="create_label">Отдел</span>
          <div className="create_div">Отдел продаж</div>
        </div>
        <div className="create_form">
          <span className="create_label">Организация</span>
          <div className="create_div">Megalab</div>
        </div>
        <button type="button" className="edit_icon">
          <img src={icons.editSVG} alt="" />
        </button>
        <button type="button" className="delete_icon">
          <img src={icons.deleteSVG} alt="" />
        </button>
      </div>
    </div>
  )
}

export default SearchPosition
