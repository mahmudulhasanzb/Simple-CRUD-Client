import React from 'react'
import { getUsers } from '../lib/data'
import UsersTable from '../components/UsersTable'

const UserManagement = async () => {
  const users = await getUsers()

  return (
    <div>
      <h2>users: {users.lenght}</h2>
      <UsersTable users={users}/>
    </div>
  )
}

export default UserManagement