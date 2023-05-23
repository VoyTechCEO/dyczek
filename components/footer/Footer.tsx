import { siteThemeState } from '@/recoilMain';
import Link from 'next/link';
import React from 'react';
import { useRecoilState } from 'recoil';
import footerStyles from './footer.module.css';
import { useTranslation } from 'next-i18next';
import useSetPageSpecs from '@/hooks/useSetPageSpecs';

const Footer = () => {
  const [siteTheme, setSiteTheme] = useRecoilState(siteThemeState);
  const { t } = useTranslation();
  const { socialIcons, sinceYear } = useSetPageSpecs();

  return (
    <>
      <footer
        className={`container ${footerStyles.container} ${
          siteTheme === `imo`
            ? footerStyles.imo
            : siteTheme === `szlaZd`
            ? footerStyles.szla_zd
            : ``
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
          © {sinceYear}-{new Date().getFullYear()} {t('main:footerRights')}
        </p>
        <p>
          {t('main:footerCredits')}{' '}
          <a href='https://github.com/VoyTechCEO' target='_blank'>
            VoyTech
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
