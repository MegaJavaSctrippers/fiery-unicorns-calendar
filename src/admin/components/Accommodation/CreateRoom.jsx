import axios from 'axios'
import React, { useState } from 'react'

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
    await axios
      .post(
        'https://checkit24.herokuapp.com/api/room/',
        {
          name,
          capacity,
          location,
          has_ac: hasAc,
          has_projector: hasProjector,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          },
        },
      )
      .then((res) => {
        console.log(res)
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
