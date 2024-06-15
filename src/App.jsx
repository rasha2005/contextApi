import { useState } from 'react'
import Login from './components/login'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <Login/>
     <Profile />
    </UserContextProvider>
  )
}

export default App
