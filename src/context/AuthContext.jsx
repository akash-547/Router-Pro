import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }){
  const [user, setUser] = useState(()=>{
    try{
      const raw = localStorage.getItem('user')
      return raw ? JSON.parse(raw) : null
    }catch(e){ return null }
  })

  useEffect(()=>{
    if(user) localStorage.setItem('user', JSON.stringify(user))
    else localStorage.removeItem('user')
  },[user])

  function login({ email }){
    // simple fake login
    const u = { email, name: email.split('@')[0] }
    setUser(u)
  }
  function signup({ name, email }){
    const u = { name, email }
    setUser(u)
  }
  function logout(){ setUser(null) }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}
