import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import api from '../../../../services/api'
import SuccessAlert from '../Alerts/SuccessAlert'
import { success } from '../../../../services/success'
import { setCreateRoom } from '../../../../store/adminSlice'
import { getRooms } from '../../../../store/admin/actions/rooms'

function CreateRoom() {
  const dispatch = useDispatch()
  const roomDefault = {
    name: '',
    capacity: '',
    description: '',
    has_projector: true,
    has_ac: true,
  }
  const [room, setRoom] = useState(roomDefault)
  const { name, capacity, description } = room
  const submitRoom = async () => {
    await api.post('/room/', room).then(() => {
      dispatch(setCreateRoom(false))
      setRoom(roomDefault)
      dispatch(getRooms())
      success(<SuccessAlert text="Помещение создано" />)
    })
  }
  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value })
  }
  const enabled = name.length > 0 && capacity.length > 0 && description.length > 0
  return (
    <div>
      <div className="create_title">
        Создать:
        <span>Помещения</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название помещения</span>
          <input onChange={handleChange} value={name} name="name" className="create_input" />
        </div>
        <div className="create_form">
          <span className="create_label">Вместимость количество</span>
          <input
            onChange={handleChange}
            value={capacity}
            name="capacity"
            className="create_input"
          />
        </div>
        <div className="create_form">
          <span className="create_label">Описание</span>
          <input onChange={handleChange} name="description" className="create_input" />
        </div>
        <button
          onClick={() => submitRoom()}
          disabled={!enabled}
          className="create_btn"
          type="button"
        >
          Сохранить
        </button>
      </div>
    </div>
  )
}

export default CreateRoom
