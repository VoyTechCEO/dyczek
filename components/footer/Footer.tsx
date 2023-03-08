import { siteThemeState } from '@/recoilMain';
import React from 'react';
import { useRecoilState } from 'recoil';
import footerStyles from './footer.module.css';

interface Props {
  sinceYear: number;
}

const Footer = ({ sinceYear }: Props) => {
  const [siteTheme, setSiteTheme] = useRecoilState(siteThemeState);

  return (
    <>
      <footer
        className={`container ${footerStyles.container} ${
          siteTheme === `imo` ? footerStyles.imo : ``
        }`}
      >
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
