import { CardProps } from '../types';
import './Card.css';

export default function Card({ personInfo }: CardProps) {
  return (
    <section className="card-container">
      <h2>{ personInfo.name }</h2>
      <h4>{ personInfo.login }</h4>
      <img
        src={ personInfo.avatar_url }
        alt={ `${personInfo.name} avatar` }
      />
      <a
        href={ personInfo.homepage }
        target="_blank"
      >
        Acessar o github de { personInfo.name }
      </a>
      <p>Pessoas seguidoras: { personInfo.followers }</p>
      <p>Seguindo: { personInfo.following }</p>
      { personInfo.company
        && (
          <p>TRYBER</p>
        ) }
    </section>
  );
}
