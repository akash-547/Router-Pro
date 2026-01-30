import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function DashboardLayout(){
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-4">Admin</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboard" end className={({isActive})=> isActive ? 'px-3 py-2 rounded bg-black text-white' : 'px-3 py-2 rounded hover:bg-gray-200'}>Home</NavLink>
          <NavLink to="/dashboard/users" className={({isActive})=> isActive ? 'px-3 py-2 rounded bg-black text-white' : 'px-3 py-2 rounded hover:bg-gray-200'}>Users</NavLink>
          <NavLink to="/dashboard/analytics" className={({isActive})=> isActive ? 'px-3 py-2 rounded bg-black text-white' : 'px-3 py-2 rounded hover:bg-gray-200'}>Analytics</NavLink>
          <NavLink to="/dashboard/settings" className={({isActive})=> isActive ? 'px-3 py-2 rounded bg-black text-white' : 'px-3 py-2 rounded hover:bg-gray-200'}>Settings</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-white">
        <Outlet />
      </main>
    </div>
  )
}
