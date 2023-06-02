import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import akademiaTrainingsStyles from './akademiaTrainings.module.css';
import { useTranslation } from 'next-i18next';

const AkademiaTrainings = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <div className={`container ${akademiaTrainingsStyles.container}`}>
        <Link href={`${router.pathname}/szkolenie_podstawowe`}>
          {t('akademiaChMain:basicTraining')}
        </Link>
        <Link href={`${router.pathname}/szkolenie_zaawansowane`}>
          {t('akademiaChMain:advancedTraining')}
        </Link>
      </div>
    </>
  );
};

export default AkademiaTrainings;
