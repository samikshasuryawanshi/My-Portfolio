import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import useLenis from './hooks/useLenis'


const App = () => {
  useLenis();
  return (
    <div 
    className='overflow-x-hidden w-screen'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App