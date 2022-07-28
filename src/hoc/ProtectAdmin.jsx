import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../services/verifyToken'

function ProtectedAdmin({ children }) {
  const isAdmin = JSON.parse(localStorage.getItem('is_staff'))
  const auth = useAuth()
  if (auth && isAdmin) {
    return children
  }
  return <Navigate to="/" />
}
ProtectedAdmin.propTypes = {
  children: PropTypes.element,
}
export default ProtectedAdmin
