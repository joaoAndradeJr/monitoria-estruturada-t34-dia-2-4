import { database } from '../../data.ts';
import { PersonType } from '../types/index.ts';
import Card from './Card.tsx';
import './CardList.css';

export default function CardList() {
  return (
    <section className="list-container">
      {
        database.map((person: PersonType) => (
          <Card personInfo={ person } key={ person.avatar_url } />
        ))
      }
    </section>
  )
}
