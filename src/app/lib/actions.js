'use server';

export const deleteUser = async userId => {
  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  console.log("after delete",data);

  //TODO: Revalidate cache
  return data;
};
