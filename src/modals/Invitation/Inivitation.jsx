/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { useDispatch } from 'react-redux'
import icons from '../../assets/icons'
import style from './Invitation.module.scss'
import InivitationItem from './InvitationItem'
import { setDelegate } from '../../store/notification/notificationSlice'

function Invitation() {
  const dispatch = useDispatch()
  return (
    <div className={style.popup_modal}>
      <div className={style.popup_backdrop} onClick={() => dispatch(setDelegate(''))} />
      <div className="modal-content">
        <div className={style.popup_header}>
          <h5>Делегировать</h5>
          <button onClick={() => dispatch(setDelegate(''))} type="button">
            <img src={icons.closeBlackSVG} alt="" />
          </button>
        </div>
        <div className={style.popup_search}>
          <img alt="" src={icons.searchSVG} />
          <input type="text" />
        </div>
        <div className={style.popup_body}>
          <InivitationItem />
          <InivitationItem />
          <InivitationItem />
          <InivitationItem />
          <InivitationItem />
          <InivitationItem />
        </div>
      </div>
    </div>
  )
}
export default Invitation
