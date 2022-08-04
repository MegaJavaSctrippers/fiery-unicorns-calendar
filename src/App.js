import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Organization from './pages/admin/components/Organization/Organization'
import Accommodaton from './pages/admin/components/Accommodation/Accommodation'
import Users from './pages/admin/components/Users/Users'
import './assets/styles/main.css'
import Admin from './pages/admin/Admin'
import { useAuth } from './services/verifyToken'
import ProtectedRoute from './hoc/ProtectedRoute'
import ProtectedAdmin from './hoc/ProtectAdmin'
import { getPositions } from './store/admin/actions/positions'
import { getDepartments } from './store/admin/actions/departments'
import { getOrganizations } from './store/admin/actions/organization'
import { getUsers } from './store/admin/actions/users'
import { getDirections } from './store/admin/actions/directions'

function App() {
  const dispatch = useDispatch()
  const isAdmin = JSON.parse(localStorage.getItem('is_staff'))
  const auth = useAuth()
  const home = (
    <ProtectedRoute isAllowed={!!auth}>
      <Homepage />
    </ProtectedRoute>
  )
  const admin = (
    <ProtectedRoute isAllowed={!!auth && !!isAdmin} redirectPath="/">
      <Admin />
    </ProtectedRoute>
  )
  useEffect(() => {
    dispatch(getPositions())
    dispatch(getDepartments())
    dispatch(getOrganizations())
    dispatch(getUsers())
    dispatch(getDirections())
  }, [])
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={home} />
        <Route path="/admin" element={admin}>
          <Route index element={<Organization />} />
          <Route path="users" element={<Users />} />
          <Route path="rooms" element={<Accommodaton />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
