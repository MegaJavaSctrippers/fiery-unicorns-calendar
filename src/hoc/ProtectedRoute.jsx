import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../services/verifyToken'

function ProtectedRoute({ children }) {
  const auth = useAuth()
  if (!auth) {
    return <Navigate to="/signin" />
  }
  return children
}
ProtectedRoute.propTypes = {
  children: PropTypes.element,
}
export default ProtectedRoute
