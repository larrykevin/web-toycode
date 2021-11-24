import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
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
            <CopyToClipboard text='https://github.com/larrykevin/toycode'>
              <p className='copied' onClick={() =>  toast('Link de ToyCode Copiado',
                  {
                    icon: '📋',
                    style: {
                      borderRadius: '8px',
                      background: '#3D405F',
                      color: '#F1F2FF',
                      fontSize: '1.8rem'
                    },
                    position: 'bottom-right'
                  }
                )
              }>
              https://github.com/larrykevin/toycode
              </p>
            </CopyToClipboard>
            <a href="https://github.com/larrykevin/toycode" target="_blank">
              <img src={ icon } alt='ícono de github' />
            </a>
          </div>
        </section>
        <section className='Main__theme--support'>
          <h2>Apoyar</h2>
          <p>Este es un tema que utilizo para mis proyectos.</p>
          <p>Es gratis. Si quieres apoyarme te lo agradezco :3.</p>
          <a href='https://www.paypal.com/donate/?hosted_button_id=G5BMRTM7ZTHJU'>
            <button>Gracias por el tema</button>
          </a>
        </section>
      </section>
      <section className='Main__image'>
        <img src={image} alt='imagen de ToyCode' />
        <Toaster 
          containerStyle={{
            bottom: 60,
            right: 120,
          }}
        />
      </section>
    </main>
  );
}

export default Home;