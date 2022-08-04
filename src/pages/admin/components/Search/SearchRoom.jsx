import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import icons from '../../../../assets/icons'
import { getRooms } from '../../../../store/admin/actions/rooms'

function SearchRoom() {
  const [edit] = useState(false)
  const rooms = useSelector((state) => state.rooms.rooms)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRooms())
  }, [])

  return (
    <>
      <div className="create_title">
        {edit ? 'Редактровать :' : 'Поиск :'}
        <span>1 этаж, 4 кабинет</span>
      </div>
      {rooms.map((room) => (
        <div key={room.id} className="create_box">
          <div className="create_form">
            <span className="create_label">Название помещения</span>
            <div className="create_div">{room.name}</div>
          </div>
          <div className="create_form">
            <span className="create_label">Вместимость (м2)</span>
            <div className="create_div">{room.capacity}</div>
          </div>
          <div className="create_form">
            <span className="create_label">Описание</span>
            <div className="create_div">{room.description}</div>
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
      ))}
    </>
  )
}

export default SearchRoom
