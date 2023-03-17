import React from 'react';
import akademiaMottoStyles from './akademiaMotto.module.css';

const AkademiaMotto = () => {
  return (
    <>
      <div className={`container ${akademiaMottoStyles.container}`}>
        <div className={akademiaMottoStyles.edge} />
        <h1>
          Uczymy od podstaw do efektów, <span>nie tylko pokazujemy</span>
        </h1>
        <div className={akademiaMottoStyles.edge} />
      </div>
    </>
  );
};

export default AkademiaMotto;
