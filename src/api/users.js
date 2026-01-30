const BASE = 'https://jsonplaceholder.typicode.com'

export async function fetchUsers(){
  const res = await fetch(`${BASE}/users`)
  if(!res.ok) throw new Error('Network error')
  return res.json()
}

export async function fetchUser(id){
  const res = await fetch(`${BASE}/users/${id}`)
  if(!res.ok) throw new Error('Network error')
  return res.json()
}
