import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]))
    } catch (e) {
      return null
    }
  }

  // Check if token is not expired open home page

  let auth = false
  const token = localStorage.getItem('token')
  const refresh = localStorage.getItem('refresh')
  if (token) {
    const parseToken = parseJwt(token)
    if (parseToken.exp * 1000 > new Date()) {
      axios.post('https://checkit24.herokuapp.com/api/token/refresh/', { refresh }).then((res) => {
        console.log(res)
      })
      auth = true
    }
  }

  return auth === true ? children : <Navigate to="/signin" />
}
ProtectedRoute.propTypes = {
  children: PropTypes.element,
}
export default ProtectedRoute
