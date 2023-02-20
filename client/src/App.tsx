import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Landing from './pages/Landing/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Dashboard</div>} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<div>Register</div>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
