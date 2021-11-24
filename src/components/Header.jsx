import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../assets/logo/toycode-logo.svg';

const Header = () => {
  const [homeClick, setHomeClick] = useState('');
  const [installClick, setInstallClick] = useState('');
  const [versionClick, setVersionClick] = useState('');

  const handleHome = () => {
    setHomeClick('active');
    setInstallClick('')
    setVersionClick('');
  }
  const handleInstall = () => {
    setHomeClick('');
    setInstallClick('active')
    setVersionClick('');
  }
  const handleVersion = () => {
    setHomeClick('');
    setInstallClick('')
    setVersionClick('active');
  }

  return (
    <header className='Header'>
      <section className='Header__container'>
        <img src={ logo } alt='logo de Toy Code' />
        <nav>
          <ul>
            <li>
              <Link
                to='/'
                onClick={ handleHome }
                className={ homeClick }
              >Home</Link>
            </li> 
            <li>
              <Link
                to='/install'
                onClick={ handleInstall }
                className={ installClick }
              >Instalación</Link>
            </li>
            <li>
              <Link
                to='/version'
                onClick={ handleVersion }
                className={ versionClick }
              >Versión 1.0</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;
