import classNames from 'classnames'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getLabels } from '../../store/actions/labelAction'
import api from '../../services/api'
import colors from './colors'
import icons from '../../assets/icons'
import style from './CreateLabel.module.scss'

function CreateLabel() {
  const dispatch = useDispatch()
  const [active, setActive] = useState('')
  const [label, setLabel] = useState({
    name: '',
    color: '',
  })
  const { name, color } = label
  const enabled = name.length > 0 && color.length > 0

  const onsubmit = async () => {
    await api.post('/mark/', label).then(() => {
      dispatch(getLabels())
    })
  }
  return (
    <div
      className={classNames(style.create_label, 'modal fade')}
      id="create-label"
      tabIndex="-1"
      aria-labelledby="create-label"
      aria-hidden="true"
    >
      <div style={{ width: '300px' }} className="modal-dialog modal-dialog-centered">
        <div className={classNames(style.create_label_content, 'modal-content')}>
          <div className={style.create_label_header}>
            <h3>Создание метки</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className={style.create_label_body}>
            <span>Название</span>
            <input onChange={(e) => setLabel({ ...label, name: e.target.value })} />
            <span>Цвет</span>
            <div className={style.colors_box}>
              {colors.map((item) => (
                <button
                  onClick={() => {
                    setLabel({ ...label, color: item })
                    setActive(item)
                  }}
                  key={item}
                  style={{ background: item }}
                  aria-label="hidden"
                  value={item}
                  type="button"
                >
                  <img className={active === item ? style.active : ''} alt="" src={icons.tickSVG} />
                </button>
              ))}
            </div>
            <button
              onClick={onsubmit}
              disabled={!enabled}
              className={style.save}
              type="button"
              data-bs-target="#create-label"
              data-bs-toggle="modal"
            >
              Создать
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateLabel
