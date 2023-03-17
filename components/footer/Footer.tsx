import { siteThemeState } from '@/recoilMain';
import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil';
import footerStyles from './footer.module.css';
import SocialIcons from '../../interfaces/socialIcons';

interface Props {
  sinceYear: number;
  socialIcons?: SocialIcons[];
}

const Footer = ({ sinceYear, socialIcons }: Props) => {
  const [siteTheme, setSiteTheme] = useRecoilState(siteThemeState);

  return (
    <>
      <footer
        className={`container ${footerStyles.container} ${
          siteTheme === `imo` ? footerStyles.imo : ``
        }`}
      >
        <ul className={footerStyles.socials}>
          {socialIcons?.map((item, index) => {
            return (
              <li key={`${item}${index}footer`}>
                <Link href={item.link} target='_blank'>
                  <img src={item.image} alt={item.name} />
                </Link>
              </li>
            );
          })}
        </ul>
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
