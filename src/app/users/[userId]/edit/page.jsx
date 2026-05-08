import { getUserById } from '@/app/lib/data';
import { updateUser } from '@/app/lib/actions';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const EditUserPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);
  console.log('Editing user:', user);

  const updateUserWrapper = async (formData) => {
    "use server";
    return updateUser(userId, formData);
  };

  return (
    <div>
      <h3>Edit User: {user?.name}</h3>
      <div className="max-w-1/2 mx-auto">
        <form action={updateUserWrapper} className="flex flex-col gap-4">
          <TextField
            className="w-full"
            name="name"
            type="text"
            defaultValue={user?.name}
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>
          <TextField
            className="w-full"
            name="email"
            type="email"
            defaultValue={user?.email}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>
          <TextField
            className="w-full"
            name="role"
            type="text"
            defaultValue={user?.role}
          >
            <Label>Role</Label>
            <Input placeholder="Enter user role" />
          </TextField>

          <div className=" flex">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="primary" slot="close">
              Confirm Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserPage;
