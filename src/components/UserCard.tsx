import { UserCardProps } from '../types/UserCardProps';
import './UserCard.css';

function UserCard({ userInfo }: { userInfo: UserCardProps }) {
  return (
    <section className="card-container">
      <h2>{ userInfo.name }</h2>
      <p>
        <span className="subtitle">Usuário no github:</span>
        { userInfo.login }
      </p>
      <img
        src={ userInfo.avatar_url }
        alt={ userInfo.name }
      />
      <a
        href={ userInfo.homepage }
        target='_blanck'
      >
        <span className="github-link">Github de { userInfo.name }</span>
      </a>
      <p>
        <span className="subtitle">Pessoas Seguidoras:</span>
        { userInfo.followers }
      </p>
      <p>
        <span className="subtitle">Seguindo:</span>
        { userInfo.following }
      </p>
      { userInfo.company && <span className="tryber">TRYBER</span> }
    </section>
  );
}

export default UserCard;
