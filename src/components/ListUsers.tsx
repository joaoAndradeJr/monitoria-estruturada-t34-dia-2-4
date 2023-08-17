import { database } from '../../data.ts';
import UserCard from './UserCard.tsx';
import './ListUsers.css';

function ListUsers() {
  return (
    <section className="list-container">
      {
        database.map((item) => (
          <UserCard userInfo={ item } key={ item.avatar_url } />
        ))
      }
    </section>
  );
}

export default ListUsers;
