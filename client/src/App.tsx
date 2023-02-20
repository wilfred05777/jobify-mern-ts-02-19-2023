import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
// import Landing from './pages/Landing/Landing'
// import Error from './pages/ErrorPage/Error'
// import Dashboard from './pages/Dashboard/Dashboard'
import { Register, Error, Dashboard, Landing } from './pages'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Dashboard</Link>
        <Link to='/register'>Register</Link>
        <Link to='/landing'>Landing</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
