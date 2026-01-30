import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function isValidEmail(e){ return /\S+@\S+\.\S+/.test(e) }

export default function Signup(){
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function submit(e){
    e.preventDefault()
    setError('')
    if(!name) return setError('Please enter your name')
    if(!email) return setError('Please enter your email')
    if(!isValidEmail(email)) return setError('Please enter a valid email')
    setLoading(true)
    setTimeout(()=>{
      signup({ name, email })
      setLoading(false)
      navigate('/dashboard')
    }, 600)
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Signup</h1>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full px-3 py-2 border rounded" />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <button disabled={loading} className="px-4 py-2 bg-black text-white rounded">{loading ? 'Signing up...' : 'Sign up'}</button>
      </form>
    </div>
  )
} 
