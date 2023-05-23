import Link from 'next/link';
import React from 'react';
import akuKosLogoStyles from './akuKosLogo.module.css';

const AkuKosLogo = () => {
  return (
    <>
      <Link
        href='/akupunktura_kosmetyczna'
        target='_blank'
        className={`container ${akuKosLogoStyles.container}`}
      >
        <img
          src='/img/akupunktura_kosmetyczna_logo.png'
          alt='Logo Akupunktury Kosmetycznej'
        />
        <h3>Akupunktura Kosmetyczna</h3>
      </Link>
    </>
  );
};

export default AkuKosLogo;
