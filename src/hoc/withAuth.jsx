/* eslint-disable func-names */
import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../services/verifyToken'

function withAuth(Component) {
  return function (props) {
    const auth = useAuth()
    if (!auth) {
      return <Navigate to="/signin" />
    }
    return <Component {...props} />
  }
}
withAuth.propTypes = {
  Component: PropTypes.element,
}
export default withAuth
