import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const auth = true
  if (!auth) {
    return <Navigate to="/signin" />
  }
  return children
}
ProtectedRoute.propTypes = {
  children: PropTypes.element,
}
export default ProtectedRoute
