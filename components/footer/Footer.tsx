import React from 'react';
import footerStyles from './footer.module.css';

interface Props {
  sinceYear: number;
}

const Footer = ({ sinceYear }: Props) => {
  return (
    <>
      <footer className={`container ${footerStyles.container}`}>
        <p>
          © {sinceYear}-{new Date().getFullYear()} Henryk Dyczek. Wszystkie
          prawa zastrzeżone.
        </p>
        <p>
          Strona wykonana przez{' '}
          <a href='https://github.com/VoyTechCEO'>VoyTech</a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
