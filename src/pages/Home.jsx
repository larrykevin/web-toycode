import React from 'react';
import image from '../assets/images/toyCode-image.png';
import icon from '../assets/icons/github-logo.svg';
import '../styles/Home.scss';

const Home = () => {
  return (
    <main className='Main'>
      <section className='Main__theme'>
        <section className='Main__theme--download'>
          <h2>Descarga gratuita</h2>
          <p>Clona el repositorio desde la carpeta theme de VSCode</p>
          <div>
            <input placeholder='https://github.com/larrykevin/toycode' />
            <a>
              <img src={ icon } alt='ícono de github' />
            </a>
          </div>
        </section>
        <section className='Main__theme--support'>
          <h2>Apoyar</h2>
          <p>Este es un tema que utilizo para mis proyectos.</p>
          <p>Si te ha servido y deseas apoyarme te agradecería de corazón. Si te ha gustado no olvides compartir.</p>
          <button>Gracias por el tema</button>
        </section>
      </section>
      <section className='Main__image'>
        <img src={image} alt='imagen de ToyCode' />
      </section>
    </main>
  );
}

export default Home;