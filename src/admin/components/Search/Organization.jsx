import React from 'react'
import icons from '../../../assets/icons'

function Organization() {
  return (
    <>
      <div className="create_title">
        Поиск:
        <span>Megalab</span>
      </div>
      <div className="create_box">
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
    </>
  )
}

export default Organization
