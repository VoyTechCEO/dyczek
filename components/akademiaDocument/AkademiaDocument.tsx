import React from 'react';
import akademiaDocumentStyles from './akademiaDocument.module.css';

const AkademiaDocument = () => {
  return (
    <>
      <div className={`container ${akademiaDocumentStyles.container}`}>
        <h4>Kwiecień 2018</h4>
        <h1>Komunikat 0</h1>
        <p>
          <b>Szanowni Państwo!</b>
          <br />Z przyjemnością zawiadamiamy, że jesienią 2018 roku będzie
          możliwość poznania teorii i sztuki chiropraktyki całego aparatu ruchu.
        </p>
      </div>
    </>
  );
};

export default AkademiaDocument;
