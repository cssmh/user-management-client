import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    fetch("http://localhost:5000/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  return (
    <>
      <h1>Users Management</h1>
      <p>Total User {users.length}</p>
      <div>
        {
          users.map(user => <p key={user.id}>{user.name} : {user.email}</p>)
        }
      </div>
    </>
  )
}

export default App
