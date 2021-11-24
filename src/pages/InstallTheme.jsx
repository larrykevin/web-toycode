import React from 'react';
import terminal from '../assets/images/terminal.svg';
import clon from '../assets/images/clon.svg';
import theme from '../assets/images/theme.svg';
import '../styles/InstallTheme.scss';

const InstallTheme = () => {
  return (
    <main className='Install'>
      <section className='Install__step'>
        <img src={terminal} alt='ícono de terminal' />
        <div>
          <h2>Abre tu terminal</h2>
          <p>Ingresa a la ruta de Visual Studio Code.Si todo está bien la ruta debería ser algo así.</p>
        </div>
        <input placeholder='aquí el texto' />
      </section>
      <section className='Install__step'>
        <img src={clon} alt='ícono de clonar' />
        <div>
          <h2>Clona el repositorio</h2>
          <p>En la primera página del landing se encuentra el link de github. Aquí te lo dejo si aún no haz entrado al repositorio.</p>
        </div>
        <input placeholder='aquí el texto' />
      </section>
      <section className='Install__step'>
        <img src={theme} alt='ícono de tema' />
        <div>
          <h2>Selecciona el tema</h2>
          <p>Ingresa a Visual Studio Code. Ingresa a la ruta indicada líneas abajo y elige el tema Toy Code. Ahora está listo para codear! =) </p>
        </div>
        <input placeholder='aquí el texto' />
      </section>
    </main>
  );
}

export default InstallTheme;