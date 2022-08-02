import React from 'react'
import PropTypes from 'prop-types'
import icons from '../../../assets/icons'

function SuccessAlert(props) {
  const { text } = props
  return (
    <div className="d-flex align-items-center">
      <img className="success_img" src={icons.acceptSVG} alt="" />
      <span>{text}</span>
    </div>
  )
}
SuccessAlert.propTypes = {
  text: PropTypes.string,
}
export default SuccessAlert
