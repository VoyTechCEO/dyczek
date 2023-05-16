import Link from 'next/link';
import React from 'react';
import imoLogoStyles from './imoLogo.module.css';

const ImoLogo = () => {
  return (
    <>
      <Link
        href='/instytut_medycyny_orientalnej'
        className={`container ${imoLogoStyles.container}`}
      >
        <img
          src='/img/instytutMedycynyOrientalnej.png'
          alt='Logo Instytutu Medycyny Orientalnej'
        />
        <h3>Instytut Medycyny Orientalnej</h3>
      </Link>
    </>
  );
};

export default ImoLogo;
