import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import './main.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
