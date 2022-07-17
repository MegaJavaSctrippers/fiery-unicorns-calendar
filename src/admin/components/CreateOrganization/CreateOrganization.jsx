import React, { useState } from 'react'
import style from './CreateOrganization.module.scss'

function CreateOrganization() {
  const [organization, setOrganization] = useState('')
  const handleChange = (e) => {
    setOrganization(e.target.value)
  }
  return (
    <div className={style.position}>
      <div className="create_title">
        Создать:
        <span>Организацию</span>
      </div>
      <div className="create_box">
        <div className="create_form">
          <span className="create_label">Название Организаций</span>
          <input
            onChange={handleChange}
            value={organization}
            name="organization"
            className="create_input"
          />
        </div>
        <button disabled={!organization.length > 0} className="create_btn" type="button">
          Сохранить
        </button>
      </div>
    </div>
  )
}

export default CreateOrganization
