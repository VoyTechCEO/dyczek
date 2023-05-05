import { siteThemeState } from '@/recoilMain';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';
import SubNavItem from '../../interfaces/subNavItem';
import subNavStyles from './subNav.module.css';

interface Props {
  subNavItems: SubNavItem[];
}

const SubNav = ({ subNavItems }: Props) => {
  const router = useRouter();

  const [siteTheme, setSiteTheme] = useRecoilState(siteThemeState);

  return (
    <>
      <ul
        className={`container ${subNavStyles.container} ${
          siteTheme === `imo`
            ? subNavStyles.imo
            : siteTheme === `szlaZd`
            ? subNavStyles.szla_zd
            : ``
        }`}
      >
        {subNavItems.map((item, index) => {
          return (
            <li key={`${item}${index}akuChi`}>
              <Link
                href={item.link}
                className={
                  router.pathname === item.link ? subNavStyles.active : ``
                }
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SubNav;
