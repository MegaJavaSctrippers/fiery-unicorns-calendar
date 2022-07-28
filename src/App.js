import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Organization from './admin/components/Organization/Organization'
import Accommodaton from './admin/components/Accommodation/Accommodation'
import Users from './admin/components/Users/Users'
import './main.css'
import Admin from './admin/Admin'
import ProtectedRoute from './hoc/ProtectedRoute'
import ProtectedAdmin from './hoc/ProtectAdmin'

function App() {
  const home = (
    <ProtectedRoute>
      <Homepage />
    </ProtectedRoute>
  )
  const admin = (
    <ProtectedAdmin>
      <Admin />
    </ProtectedAdmin>
  )

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
