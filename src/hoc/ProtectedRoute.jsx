import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../services/helper'

function ProtectedRoute({ children }) {
  const auth = useAuth()
  return auth === true ? children : <Navigate to="/signin" />
}
ProtectedRoute.propTypes = {
  children: PropTypes.element,
}
export default ProtectedRoute
