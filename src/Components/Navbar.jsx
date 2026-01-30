import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div className='navbar w-full flex justify-around items-center py-4 px-4'>
      <div className='flex items-center gap-20'>
        <img src={Logo} alt="" className='w-37.5'/>
        <ul className="hidden md:flex py-3 px-7 rounded-3xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.1)] gap-3">
          <NavLink to='/'><li className="px-3 py-1 text-black">Home</li></NavLink>
          <NavLink to='/product'><li className="px-3 py-1 text-black">Products</li></NavLink>
          <NavLink to='/about'><li className="px-3 py-1 text-black">About</li></NavLink>
          <NavLink to='/contact'><li className="px-3 py-1 text-black">Contact</li></NavLink>
        </ul>
      </div>

      <div>
        {user ? (
          <div className='flex justify-center items-center gap-3'>
            <span className='text-sm'>Hi, {user.name}</span>
            <button onClick={() => { logout(); navigate('/') }} className='px-3 py-1 bg-gray-100 rounded'>Logout</button>
          </div>
        ) : (
          <div className='flex items-center gap-2'>
            <NavLink to='/login' className='px-3 py-2 rounded border'>Log in</NavLink>
            <NavLink to='/signup' className='px-3 py-2 rounded bg-black text-white'>Sign up</NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar

