import React from 'react'

function CreateRoom() {
  return (
    <div>
      <div className="create_title">
        Создать:
        <span>Помещения</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название помещения</span>
          <input value="1 кабинет 4 этаж" name="organization" className="create_input" />
        </div>
        <div className="create_form">
          <span className="create_label">Вместимость (м2)</span>
          <input value="1 кабинет 4 этаж" name="organization" className="create_input" />
        </div>
        <div className="create_form">
          <span className="create_label">Описание</span>
          <input value="1 кабинет 4 этаж" name="organization" className="create_input" />
        </div>
        <button
          onClick={() => console.log('res')}
          disabled={![].length > 0}
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
