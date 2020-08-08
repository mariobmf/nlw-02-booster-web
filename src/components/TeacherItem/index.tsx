import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/40251156?s=400&u=b0d454395ee494219b4464fa36a922fba5a70ac7&v=4"
          alt="Mário Fernandes"
        />
        <div>
          <strong>Mário Fernandes</strong>
          <span>Engenharia de Software</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat
        augue magna, a suscipit leo consectetur nec. Donec mi dui, ultricies a
        est id, accumsan interdum neque. Maecenas et lacus dolor.
        <br />
        <br />
        Pellentesque malesuada molestie nisi, nec mollis ipsum sagittis in. Cras
        commodo ipsum vel egestas consequat. Fusce sit amet pellentesque tellus.
        Nunc volutpat, velit a tincidunt lacinia, diam libero elementum neque,
        vitae aliquam libero erat sed nunc.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={wppIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
