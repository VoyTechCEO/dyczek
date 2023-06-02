import Link from 'next/link';
import React from 'react';
import akademiaHeaderStyles from './akademiaHeader.module.css';
import AkademiaMotto from '../akademiaMotto/AkademiaMotto';
import { useTranslation } from 'next-i18next';

const AkademiaHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={`container ${akademiaHeaderStyles.container}`}>
        <div className={akademiaHeaderStyles.banner} />
        <div className={akademiaHeaderStyles.overlay}>
          <Link href='/akademia_chiropraktyki'>
            <img
              src='/svg/akademia_chiropraktyki_logo.svg'
              alt='Akademia Chiropraktyki'
            />
          </Link>
        </div>
        <p className={akademiaHeaderStyles.quote}>
          Akademia Chiropraktyki oferuje prawdziwą niezmienną sztukę, istny
          majstersztyk w subtelnym wykonaniu.
        </p>
        <h3>Kamil Rządkowski, {t('akademiaChMain:quoteMonth')} 2022</h3>
        <AkademiaMotto />
      </section>
    </>
  );
};

export default AkademiaHeader;
