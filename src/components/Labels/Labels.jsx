/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import icons from '../../assets/icons'
import { setLabel } from '../../store/event/eventSlice'
import style from './Labels.module.scss'

function Labels({ labels }) {
  const label = useSelector((state) => state.event.label)
  const dispatch = useDispatch()
  return (
    <div className={style.labels}>
      <div className={style.labels_header}>
        <h2 className={style.labels_title}>Мои метки</h2>
        <div className={style.labels_add} data-bs-toggle="modal" data-bs-target="#create-label">
          <img src={icons.plusSVG} alt="" />
        </div>
      </div>
      <div
        style={{ background: label ? '' : '#4B84F4', color: label ? '' : '#fff' }}
        className={classNames('d-flex align-items-center mb-2', style.labels_body)}
        onClick={() => dispatch(setLabel(''))}
      >
        <span className={style.label_all} />
        Все
      </div>
      {labels.map((item) => (
        <div
          key={item.id}
          onClick={() => dispatch(setLabel(item.color))}
          className={classNames('d-flex align-items-center mb-2', style.labels_body)}
          style={{
            background: label === item.color ? item.color : null,
            color: label === item.color ? '#fff' : '',
          }}
        >
          <span className={style.labels_color} style={{ background: item.color }} />
          {item.name}
        </div>
      ))}
    </div>
  )
}

Labels.propTypes = {
  labels: PropTypes.array,
}

export default Labels
