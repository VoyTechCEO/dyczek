import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import akademiaTrainingsStyles from './akademiaTrainings.module.css';
import { useTranslation } from 'next-i18next';

const AkademiaTrainings = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const generateTraining = (route: string, translation: string) => {
    return (
      <div className={akademiaTrainingsStyles.block}>
        {router.pathname.includes(route) && (
          <>
            <div className={akademiaTrainingsStyles.edge} />
            <div className={akademiaTrainingsStyles.edge} />
          </>
        )}
        <Link href={`${router.pathname}/${route}#startView`}>
          {translation}
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className={`container ${akademiaTrainingsStyles.container}`}>
        {generateTraining(
          `szkolenie_podstawowe`,
          t('akademiaChMain:basicTraining')
        )}
        {generateTraining(
          `szkolenie_zaawansowane`,
          t('akademiaChMain:advancedTraining')
        )}
      </div>
    </>
  );
};

export default AkademiaTrainings;
