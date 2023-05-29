import React from 'react';
import imoHeaderStyles from './imoHeader.module.css';
import { useTranslation } from 'next-i18next';

const ImoHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={`container ${imoHeaderStyles.container}`}>
        <div className={imoHeaderStyles.banner}>
          <div className={imoHeaderStyles.blur} />
          <div className={imoHeaderStyles.signature}>
            <div className={imoHeaderStyles.icon}>
              <img
                src='/svg/instytut_medycyny_orientalnej_logo.svg'
                alt='Instytut Medycyny Orientalnej'
              />
              <h1>{t('imoMain:pageName')}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImoHeader;
