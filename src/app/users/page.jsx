import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/UsersTable';
import { createUser, deleteUser } from '../lib/actions';
import AddUserModal from '../components/AddUserModal';

const UserManagement = async () => {
  const users = await getUsers();

  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h2>users Management: {users.length}</h2>
        <AddUserModal createUserAction={createUser}/>
      </div>
      <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
    </div>
  );
};

export default UserManagement;
