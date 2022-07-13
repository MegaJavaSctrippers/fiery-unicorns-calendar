import React from 'react'
import $ from 'jquery'
import style from './Invitation.module.scss'

function Invitation() {
  return (
    <div
      className="modal beka fade"
      id="invitation"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              onClick={() => {
                $('#invittation').modal({
                  backdrop: 'static',
                  keyboard: false,
                })
              }}
              type="button"
              className="btn-close"
              aria-label="Close"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="modal-body">
            <h3>Helor</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Invitation
