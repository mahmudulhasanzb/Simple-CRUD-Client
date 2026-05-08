import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/UsersTable';
import { deleteUser } from '../lib/actions';

const UserManagement = async () => {
  const users = await getUsers();

  return (
    <div>
      <h2>users Management: {users.length}</h2>
      <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
    </div>
  );
};

export default UserManagement;
