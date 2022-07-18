import React from 'react'
import { useSelector } from 'react-redux'
import icons from '../../../assets/icons'

function SearchOrganization() {
  const organization = useSelector((state) => state.admin.searchOrganization)
  return (
    <div>
      <div className="create_title">
        Поиск:
        <span>{organization}</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название организаций</span>
          <div className="create_div">{organization}</div>
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

export default SearchOrganization
