import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'
import useLenis from './hooks/useLenis'


const App = () => {
  useLenis();
  return (
    <div
      className='overflow-x-hidden w-screen'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/admin-login' element={<AdminLogin />}></Route>
        <Route path='/admin' element={<AdminDashboard />}></Route>
      </Routes>
    </div>
  )
}

export default App