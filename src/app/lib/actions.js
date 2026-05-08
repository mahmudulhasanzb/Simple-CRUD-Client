'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createUser = async formData => {
  'use server';
  const newUser = Object.fromEntries(formData.entries());
  console.log('new user Daat:', newUser);
  const res = await fetch(`http://localhost:5000/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  const data = await res.json();
  console.log('Data after post', data);

  //TODO: Revalidate cache
  if (data.insertedId) {
    revalidatePath('/users');
  }
  return data;
};

export const updateUser = async (userId, formData) => {
  'use server';
  const updatedUser = Object.fromEntries(formData.entries());
  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updatedUser),
  });
  const data = await res.json();
  console.log('data modified', data);

  // Revalidate cache to show the updated user in the list
  if (data.modifiedCount > 0) {
    revalidatePath('/users');
    redirect('/users');
  }
  return data;
};

export const deleteUser = async userId => {
  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  console.log('after delete', data);

  //TODO: Revalidate cache
  if (data.deletedCount > 0) {
    revalidatePath('/users');
  }
  return data;
};
