import { siteThemeState } from '@/recoilMain';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';
import subNavStyles from './subNav.module.css';
import useSetPageSpecs from '@/hooks/useSetPageSpecs';

const SubNav = () => {
  const router = useRouter();
  const { subNavContent } = useSetPageSpecs();

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
        {subNavContent.map((item, index) => {
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
