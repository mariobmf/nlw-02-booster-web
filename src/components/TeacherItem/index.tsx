/* eslint-disable react/prop-types */
import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface ITeacher {
  id: number;
  avatar: string;
  bio: string;
  name: string;
  subject: string;
  whatsapp: string;
  cost: number;
}
interface IProps {
  teacher: ITeacher;
}

const TeacherItem: React.FC<IProps> = ({ teacher }) => {
  const createNewConnection = () => {
    api.post('connections', {
      user_id: teacher.id,
    });
  };

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          type="button"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={wppIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
