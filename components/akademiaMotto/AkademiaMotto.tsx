import React from 'react';
import akademiaMottoStyles from './akademiaMotto.module.css';
import { useTranslation } from 'next-i18next';
import ElementRef from '../elementRef/ElementRef';

const AkademiaMotto = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`container ${akademiaMottoStyles.container}`}>
        <div className={akademiaMottoStyles.edge} />
        <ElementRef element='h1' content={t('akademiaChMain:motto')} />
        <div className={akademiaMottoStyles.edge} />
      </div>
    </>
  );
};

export default AkademiaMotto;
