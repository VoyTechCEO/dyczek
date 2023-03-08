import React from 'react';
import imoHeaderStyles from './imoHeader.module.css';

const ImoHeader = () => {
  return (
    <>
      <section className={`container ${imoHeaderStyles.container}`}>
        <div className={imoHeaderStyles.banner}>
          <div className={imoHeaderStyles.blur} />
          <div className={imoHeaderStyles.signature}>
            <div className={imoHeaderStyles.icon}>
              <img
                src='/img/instytutMedycynyOrientalnej.png'
                alt='Instytut Medycyny Orientalnej'
              />
              <h1>INSTYTUT MEDYCYNY ORIENTALNEJ</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImoHeader;
