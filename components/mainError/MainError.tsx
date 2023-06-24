import React from 'react';
import mainErrorStyles from './mainError.module.css';
import Link from 'next/link';

const MainError = () => {
  return (
    <>
      <div className={`container ${mainErrorStyles.container}`}>
        <div className={mainErrorStyles.error}>
          <h1>{`:(`}</h1>
          <h2>Wystąpił błąd.</h2>
          <Link href='/'>Wróć do strony głównej.</Link>
        </div>
      </div>
    </>
  );
};

export default MainError;
