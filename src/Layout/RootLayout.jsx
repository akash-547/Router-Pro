import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <Navbar/>
      <main className='p-6 max-w-4xl mx-auto'>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
