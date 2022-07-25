import React, { useState } from 'react'
import icons from '../../../assets/icons'

function SearchRoom() {
  const [edit] = useState(false)

  return (
    <>
      <div className="create_title">
        {edit ? 'Редактровать :' : 'Поиск :'}
        <span>1 этаж, 4 кабинет</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название помещения</span>
          <div className="create_div">1 этаж, 4 кабинет</div>
        </div>
        <div className="create_form">
          <span className="create_label">Вместимость (м2)</span>
          <div className="create_div">12</div>
        </div>
        <div className="create_form">
          <span className="create_label">Описание</span>
          <div className="create_div">Кондиционер, диван, стулья</div>
        </div>
        <button type="button" className="edit_icon">
          <img src={icons.editSVG} alt="" />
        </button>
        <button type="button" className="delete_icon">
          <img src={icons.deleteSVG} alt="" />
        </button>
        <button type="button" className="delete_icon">
          <img src={icons.hideRoomSVG} alt="" />
        </button>
      </div>
    </>
  )
}

export default SearchRoom
