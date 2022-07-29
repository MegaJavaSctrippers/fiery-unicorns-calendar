import React, { useState } from 'react'
import api from '../../../services/api'
import SuccessAlert from '../Alerts/SuccessAlert'
import { success } from '../../../services/success'

function CreateRoom() {
  const [room, setRoom] = useState({
    name: '',
    capacity: '',
    location: '',
    hasProjector: true,
    hasAc: true,
  })
  const { name, capacity, location, hasAc, hasProjector } = room
  const submitRoom = async () => {
    await api
      .post('/room/', {
        name,
        capacity,
        description: location,
        has_ac: hasAc,
        has_projector: hasProjector,
      })
      .then(() => {
        setRoom({
          name: '',
          capacity: '',
          location: '',
          hasProjector: true,
          hasAc: true,
        })
        success(<SuccessAlert text="Помещение создано" />)
      })
  }
  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value })
  }
  const enabled = name.length > 0 && capacity.length > 0 && location.length > 0
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
          <input
            onChange={handleChange}
            value={location}
            name="location"
            className="create_input"
          />
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
