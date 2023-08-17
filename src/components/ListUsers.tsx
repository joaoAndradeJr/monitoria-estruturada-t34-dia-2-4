import { database } from '../../data.ts';
import UserCard from './UserCard.tsx';

function ListUsers() {
  return (
    <main>
      {
        database.map((item) => (
          <UserCard userInfo={ item } key={ item.avatar_url } />
        ))
      }
    </main>
  );
}

export default ListUsers;
