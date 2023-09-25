import React from 'react';
import axios from 'axios';
import { Layout } from '@/components/Layout';
import { User } from '@/components/User/User';
import { UsersTable } from '@/components/UsersTable/UsersTable';
import { User as UserType } from '@types';

function App() {
  const [users, setUsers] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState<UserType>();
  const [isOnUsersDetails, setIsOnUsersDetails] = React.useState(false);

  React.useEffect(() => {
    axios.get('http://localhost:3001/api/v1/users').then((res) => {
      setUsers(res.data.users);
    });
  }, []);

  return (
    <Layout>
      {isOnUsersDetails ? (
        <User
          user={selectedUser}
          navBack={() => {
            setIsOnUsersDetails(false);
          }}
        />
      ) : (
        <UsersTable
          users={users}
          handleSelectUser={(user) => {
            setIsOnUsersDetails(true);
            setSelectedUser(user);
          }}
        />
      )}
    </Layout>
  );
}

export default App;
