import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const [auth, setAuth] = useState(true)
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]))
    } catch (e) {
      return null
    }
  }

  // Check if token is not expired open home page

  const token = localStorage.getItem('token')
  const refresh = localStorage.getItem('refresh')
  if (token) {
    const parseToken = parseJwt(token)
    if (parseToken.exp - 1000 > new Date()) {
      setAuth(true)
    } else if (refresh) {
      axios.post('https://checkit24.herokuapp.com/api/token/refresh/', refresh).then((res) => {
        localStorage.setItem('token', res.data.access)
        const refreshParse = parseJwt(res.data.access)
        if (refreshParse.exp * 1000 > new Date()) {
          setAuth(true)
        }
      })
    }
  }

  return auth === true ? children : <Navigate to="/signin" />
}
ProtectedRoute.propTypes = {
  children: PropTypes.element,
}
export default ProtectedRoute
