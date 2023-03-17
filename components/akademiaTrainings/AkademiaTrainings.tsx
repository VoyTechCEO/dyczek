import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import akademiaTrainingsStyles from './akademiaTrainings.module.css';

const AkademiaTrainings = () => {
  const router = useRouter();

  return (
    <>
      <div className={`container ${akademiaTrainingsStyles.container}`}>
        <Link href={`${router.pathname}/szkolenie_podstawowe`}>
          Szkolenie podstawowe
        </Link>
        <Link href={`${router.pathname}/szkolenie_zaawansowane`}>
          Szkolenie zaawansowane
        </Link>
      </div>
    </>
  );
};

export default AkademiaTrainings;
