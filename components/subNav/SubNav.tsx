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
            <li key={`${item.name}${index}subNav`}>
              {item.link ? (
                <Link
                  href={`${item.link!}#startView`}
                  className={
                    router.pathname === item.link ? subNavStyles.active : ``
                  }
                >
                  {item.name}
                </Link>
              ) : (
                <div
                  className={
                    item.dropdown!.find(
                      (dropdownItem, dropdownIndex) =>
                        router.pathname === dropdownItem.link
                    )
                      ? `${subNavStyles.dropdown} ${subNavStyles.active}`
                      : subNavStyles.dropdown
                  }
                >
                  <p>{item.name}</p>
                  <ul>
                    {item.dropdown?.map((dropdownItem, dropdownIndex) => {
                      return (
                        <li key={`${dropdownItem.link}subNav${dropdownIndex}`}>
                          <Link
                            href={`${dropdownItem.link!}#startView`}
                            className={
                              router.pathname === dropdownItem.link
                                ? subNavStyles.active
                                : ``
                            }
                          >
                            {dropdownItem.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SubNav;
