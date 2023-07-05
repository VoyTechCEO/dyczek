import { siteThemeState } from '@/recoilMain';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';
import mainNavStyles from './mainNav.module.css';
import { useTranslation } from 'next-i18next';
import { useMediaQuery } from 'react-responsive';

interface NavItem {
  name: string;
  link: string;
}

interface ItemLogo {
  logo: JSX.Element;
}

const MainNav = () => {
  const router = useRouter();
  const [siteTheme, setSiteTheme] = useRecoilState(siteThemeState);
  const { t } = useTranslation();

  const navList: NavItem[] = t('main:mainNav', { returnObjects: true });
  const navItems: NavItem[] = navList;

  // --- responsive design START --- //
  const isSmallerScreen = useMediaQuery({ maxWidth: 1400 });
  const responsiveNavItems: ItemLogo[] = [
    {
      logo: <img src='/svg/henryk_dyczek_favicon.svg' alt='henryk dyczek' />,
    },
    {
      logo: (
        <img
          src='/svg/akademia_chiropraktyki_logo.svg'
          alt='akademia chiropraktyki'
        />
      ),
    },
    {
      logo: (
        <img
          src='/svg/akupunktura_chiropraktyka_logo.svg'
          alt='akupunktura chiropraktyka'
        />
      ),
    },
    {
      logo: (
        <img
          src='/svg/instytut_medycyny_orientalnej_logo.svg'
          alt='instytut medycyny orientalnej'
        />
      ),
    },
    {
      logo: (
        <img src='/svg/szlachetne_zdrowie_logo.svg' alt='szlachetne zdrowie' />
      ),
    },
    {
      logo: (
        <img
          src='/svg/akupunktura_kosmetyczna_logo.svg'
          alt='akupunktura kosmetyczna'
        />
      ),
    },
  ];
  // --- responsive design END --- //

  const currentPath = navItems.reverse().find((item) => {
    return router.pathname.includes(item.link);
  });
  navItems.reverse();

  return (
    <>
      <ul id='startView' className={`container ${mainNavStyles.container}`}>
        {navItems.map((item: NavItem, index) => {
          return (
            <li
              key={`${item}${index}`}
              className={
                siteTheme === `imo`
                  ? mainNavStyles.imo
                  : siteTheme === `szlaZd`
                  ? mainNavStyles.szla_zd
                  : siteTheme === `akuKos`
                  ? mainNavStyles.aku_kos
                  : ``
              }
            >
              <Link
                href={item.link}
                className={
                  // extract the current route
                  currentPath === item
                    ? `${mainNavStyles.link} ${mainNavStyles.active}`
                    : mainNavStyles.link
                }
              >
                {isSmallerScreen ? responsiveNavItems[index].logo : item.name}
              </Link>
              {currentPath === item && (
                <div className={mainNavStyles.underline} />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MainNav;
