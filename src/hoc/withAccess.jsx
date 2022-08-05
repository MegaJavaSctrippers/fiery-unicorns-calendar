/* eslint-disable func-names */
import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'

function withAccess(Component) {
  return function (props) {
    const { pathname } = useLocation()
    const isAdmin = JSON.parse(localStorage.getItem('is_staff'))
    const adminPath = pathname.split('/').find((item) => item === 'admin')
    if (!isAdmin && adminPath) {
      return <Navigate to="/" />
    }
    return <Component {...props} />
  }
}
withAccess.propTypes = {
  Component: PropTypes.element,
}
export default withAccess
