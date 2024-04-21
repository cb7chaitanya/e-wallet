import React, { useEffect, useState } from 'react'
import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import {Users, User} from '../components/Users'
import  axios  from 'axios'

function Dashboard() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/user/all')
    .then(response => {
      setUsers(response.data.user)
    })
  },[users])

  return (
    <div>
      <Appbar />
      <div>
        <Balance/>
        <Users />
        <div>
          {users.map(user => <User user={user} />)}
        </div>
      </div>
    </div>
  )
}

export default Dashboard