import React from 'react';
import akuKosHeaderStyles from './akuKosHeader.module.css';

const AkuKosHeader = () => {
  return (
    <>
      <section className={`container ${akuKosHeaderStyles.container}`}>
        <div className={akuKosHeaderStyles.signature}>
          <img
            src='/svg/akupunktura_kosmetyczna_logo.svg'
            alt='Akupunktura kosmetyczna logo'
          />
          <h1>AKUPUNKTURA KOSMETYCZNA</h1>
        </div>
      </section>
    </>
  );
};

export default AkuKosHeader;
