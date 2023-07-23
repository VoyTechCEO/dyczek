import Link from 'next/link';
import React from 'react';
import iconNavStyles from './iconNav.module.css';
import IconNavItem from '../../interfaces/iconNavItem';
import { useRecoilState } from 'recoil';
import { siteThemeState } from '@/recoilMain';

interface Props {
  navItems: IconNavItem[];
}

const IconNav = ({ navItems }: Props) => {
  const [siteTheme, setSiteTheme] = useRecoilState(siteThemeState);

  return (
    <>
      <ul
        className={`container ${iconNavStyles.container} ${
          siteTheme === `akuChi` && iconNavStyles.aku_chi
        }`}
      >
        {navItems.map((item, index) => {
          return (
            <li key={`${item}${index}`}>
              {item.component ? (
                item.component
              ) : (
                <Link href={item.link!}>
                  <img
                    className={iconNavStyles.icon}
                    src={item.src}
                    alt={item.name}
                  />
                </Link>
              )}
              <div className={iconNavStyles.painter}>
                <div className={iconNavStyles.line} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default IconNav;
