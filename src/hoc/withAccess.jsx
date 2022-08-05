/* eslint-disable func-names */
import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../services/verifyToken'

function withAccess(Component) {
  return function (props) {
    const { pathname } = useLocation()
    const auth = useAuth()
    const isAdmin = JSON.parse(localStorage.getItem('is_staff'))
    const adminPath = pathname.split('/').find((item) => item === 'admin')
    if (!auth) {
      return <Navigate to="/signin" />
    }
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
