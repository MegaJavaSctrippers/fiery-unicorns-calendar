import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ children, redirectPath = '/signin', isAllowed }) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }
  return children || <Outlet />
}
ProtectedRoute.propTypes = {
  children: PropTypes.element,
  redirectPath: PropTypes.string,
  isAllowed: PropTypes.bool,
}
export default ProtectedRoute
