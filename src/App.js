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

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />}>
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
