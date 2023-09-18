import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>DevSecOps in Action</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Time to learn DevSecOps.
        </p>
      </div>
    </>
  )
}

export default App
