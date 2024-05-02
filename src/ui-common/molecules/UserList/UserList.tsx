import React, { useEffect } from 'react';
import { useStore } from '../../../ui-state-management/store';
import { useQuery } from 'react-query';

const UserList: React.FC = () => {
  const { users, setUsers } = useStore();
  const { data } = useQuery('fetch users', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
  });
  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);
  console.log('users', users);
  return (
    <>
      <p>Hello from users list</p>
      {users.length > 0 && <p>user list fetched</p>}
    </>
  );
};

export default UserList;
