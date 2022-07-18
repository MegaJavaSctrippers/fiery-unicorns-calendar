import React from 'react'
import { useSelector } from 'react-redux'
import icons from '../../../assets/icons'

function SearchDepartment() {
  const department = useSelector((state) => state.admin.searchDepartment)
  return (
    <div>
      <div className="create_title">
        Поиск:
        <span>{department}</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название отдела</span>
          <div className="create_div">{department}</div>
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

export default SearchDepartment
