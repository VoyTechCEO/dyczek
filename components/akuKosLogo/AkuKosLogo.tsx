import Link from 'next/link';
import React from 'react';
import akuKosLogoStyles from './akuKosLogo.module.css';
import { useTranslation } from 'next-i18next';

const AkuKosLogo = () => {
  const { t } = useTranslation();

  return (
    <>
      <Link
        href='/akupunktura_kosmetyczna'
        target='_blank'
        className={`container ${akuKosLogoStyles.container}`}
      >
        <img
          src='/svg/akupunktura_kosmetyczna_logo.svg'
          alt='Logo Akupunktury Kosmetycznej'
        />
        <h3>Akupunktura Kosmetyczna</h3>
      </Link>
    </>
  );
};

export default AkuKosLogo;
