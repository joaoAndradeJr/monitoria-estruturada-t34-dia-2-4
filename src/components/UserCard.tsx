import { UserCardProps } from '../types/UserCardProps';
import './UserCard.css';

function UserCard({ userInfo }: { userInfo: UserCardProps }) {
  return (
    <section className="card-container">
      <h2>{ userInfo.name }</h2>
      <p>{ userInfo.login }</p>
      <img
        src={ userInfo.avatar_url }
        alt={ userInfo.name }
      />
      <a
        href={ userInfo.homepage }
        target='_blanck'
      >
        { userInfo.homepage }
      </a>
      <p>{ userInfo.followers }</p>
      <p>{ userInfo.following }</p>
      { userInfo.company && <span className="tryber">TRYBER</span> }
    </section>
  );
}

export default UserCard;
