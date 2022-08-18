import React from 'react'
import icons from '../../assets/icons'
import style from './Invitation.module.scss'
import InivitationItem from './InvitationItem'

function Invitation() {
  return (
    <div className={style.popup_modal}>
      <div className="modal-content">
        <div className={style.popup_header}>
          <h5>Пригласить</h5>
          <button type="button">X</button>
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
        <div className="d-flex align-items-center">
          <div className={style.added_users}>
            <img className={style.avatar} src={icons.avatar} alt="" />
            <img className={style.close} src={icons.circleCloseSVG} alt="" />
          </div>
          <div className={style.added_users}>
            <img className={style.avatar} src={icons.avatar} alt="" />
            <img className={style.close} src={icons.circleCloseSVG} alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button className={style.popup_btns} type="button">
            Пригласить
          </button>
        </div>
      </div>
    </div>
  )
}
export default Invitation
