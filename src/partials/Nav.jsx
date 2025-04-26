import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <div
    style={{
      background:"linear-gradient(to right, rgb(17, 17, 17),rgb(22, 22, 22),rgb(17, 17, 17))",
      backgroundPosition:"center",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
     }}
     className='h-[10vh] px-10 text-white fixed flex items-center justify-between w-full shadow-2xl'>
       <div>
         <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
           Portfolio
         </h1>
       </div>
       <div className='flex gap-15'>
          <Link className='text-lg'>
              Home
          </Link>
          <Link className='text-lg'>
              About Me
          </Link>
          <Link className='text-lg'>
              Skills
          </Link>
          <Link className='text-lg'>
              Project's
          </Link>
       </div>

       <button className=' px-4 py-2 cursor-pointer active:scale-95 font-semibold text-lg rounded-full bg-white text-black '>Contact me</button>


     </div>
  )
}

export default Nav