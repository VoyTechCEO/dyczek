import { siteThemeState } from '@/recoilMain';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';
import mainNavStyles from './mainNav.module.css';
import { useTranslation } from 'next-i18next';

interface NavItem {
  name: string;
  link: string;
}

const MainNav = () => {
  const router = useRouter();
  const [siteTheme, setSiteTheme] = useRecoilState(siteThemeState);
  const { t } = useTranslation();

  const navList: NavItem[] = t('main:mainNav', { returnObjects: true });

  const navItems: NavItem[] = navList;

  const currentPath = navItems.reverse().find((item) => {
    return router.pathname.includes(item.link);
  });
  navItems.reverse();

  return (
    <>
      <ul className={`container ${mainNavStyles.container}`}>
        {navItems.map((item: NavItem, index) => {
          return (
            <li
              key={`${item}${index}`}
              className={
                siteTheme === `imo`
                  ? mainNavStyles.imo
                  : siteTheme === `szlaZd`
                  ? mainNavStyles.szla_zd
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
                {item.name}
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
