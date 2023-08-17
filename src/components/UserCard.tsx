import { UserCardProps } from '../types/UserCardProps';

function UserCard({ userInfo }: { userInfo: UserCardProps }) {
  return (
    <section>
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
    </section>
  );
}

export default UserCard;
