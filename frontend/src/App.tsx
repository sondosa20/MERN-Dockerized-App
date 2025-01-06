import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import { getApiUsersOptions } from './client/@tanstack/react-query.gen'

function App() {
  const [count, setCount] = useState(0)
  const {data, error} = useQuery({...getApiUsersOptions()})

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h2>Users</h2>
      {error && <div>Error: {error.message}</div>}
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.name}>{user.email}</li>
          ))}
        </ul>
      )}
    </> 
  )
}

export default App
