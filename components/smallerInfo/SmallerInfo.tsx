import React from 'react';
import smallerInfoStyles from './smallerInfo.module.css';
import { useTranslation } from 'next-i18next';

const SmallerInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={`container ${smallerInfoStyles.container}`}>
      <p>{t('imoMain:smallerInfo')}</p>
    </div>
  );
};

export default SmallerInfo;
