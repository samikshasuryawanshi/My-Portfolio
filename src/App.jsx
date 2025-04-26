import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div 
    style={{
      background:"linear-gradient(to right, rgb(17, 17, 17),rgb(22, 22, 22),rgb(17, 17, 17))",
      backgroundPosition:"center",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
     }}
    className='h-screen overflow-x-hidden w-screen'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App