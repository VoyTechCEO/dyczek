import React from 'react';
import footerStyles from './footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={`container ${footerStyles.container}`}>
        <p>© 2008-2023 Henryk Dyczek. Wszystkie prawa zastrzeżone.</p>
        <p>
          Strona wykonana przez{' '}
          <a href='https://github.com/VoyTechCEO'>VoyTech</a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
