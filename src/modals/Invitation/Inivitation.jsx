import React from 'react'
import classNames from 'classnames'
import icons from '../../assets/icons'
import style from './Invitation.module.scss'
import InivitationItem from './InvitationItem'

function Invitation() {
  return (
    <div
      className={classNames('modal fade', style.popup_modal)}
      id="invitation"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '600px' }}>
        <div className="modal-content">
          <div className={style.popup_header}>
            <h5>Пригласить</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              data-bs-dismiss="modal"
            />
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
    </div>
  )
}
export default Invitation
