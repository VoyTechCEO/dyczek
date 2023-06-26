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
        <h3>
          Akademia Chiropraktyki oferuje prawdziwą niezmienną sztukę, istny
          majstersztyk w subtelnym wykonaniu.
        </h3>
        <p className={akademiaHeaderStyles.author}>
          Kamil Rządkowski, {t('akademiaChMain:quoteMonth')} 2022
        </p>
        <AkademiaMotto />
      </section>
    </>
  );
};

export default AkademiaHeader;
