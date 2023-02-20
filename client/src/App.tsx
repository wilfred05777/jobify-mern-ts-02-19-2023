import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Landing from './pages/Landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Landing />
    </div>
  )
}

export default App
