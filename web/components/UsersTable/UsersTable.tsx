import { User } from '@types';

interface UsersTableProps {
  users: User[];
  handleSelectUser: (user: User) => void;
}

export const UsersTable = ({ users, handleSelectUser }: UsersTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Company</td>
          <td>Email</td>
          <td>Phone Number</td>
        </tr>
      </thead>
      {users?.map((user) => (
        <tr key={user.id} onClick={() => handleSelectUser(user)}>
          <td>
            {user.firstName} {user.lastName}
          </td>
          <td>{user.company}</td>
          <td>{user.email}</td>
          <td>{user.phoneNumber}</td>
        </tr>
      ))}
    </table>
  );
};
