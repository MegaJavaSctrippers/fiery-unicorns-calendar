import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Organization from './pages/admin/components/Organization/Organization'
import Room from './pages/admin/components/Room/Room'
import Users from './pages/admin/components/Users/Users'
import './assets/styles/main.css'
import Admin from './pages/admin/Admin'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Organization />} />
          <Route path="users" element={<Users />} />
          <Route path="rooms" element={<Room />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
