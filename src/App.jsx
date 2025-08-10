import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Register from './Components/Register'
import Login from './Components/Login'
import Home from './Components/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element=<Register/> />
      <Route path='/Login' element=<Login/> />
      <Route path='/Home' element=<Home/> />

    </Routes>
      
    </>
  )
}

export default App
