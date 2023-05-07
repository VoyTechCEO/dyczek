import React from 'react';
import smallerInfoStyles from './smallerInfo.module.css';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const SmallerInfo = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className={`container ${smallerInfoStyles.container}`}>
      <p
        className={
          router.pathname.includes(`instytut_medycyny_orientalnej`)
            ? smallerInfoStyles.imo
            : ``
        }
      >
        {router.pathname.includes(`instytut_medycyny_orientalnej`)
          ? t('imoMain:smallerInfo')
          : router.pathname.includes(`szlachetne_zdrowie`)
          ? t('szlaZdMain:smallerInfo')
          : ``}
      </p>
    </div>
  );
};

export default SmallerInfo;
