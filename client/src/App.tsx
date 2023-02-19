import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Landing from './pages/Landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Jobify</h1>
      <Landing />
    </div>
  )
}

export default App
