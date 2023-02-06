import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import mainNavStyles from './mainNav.module.css';

interface NavItem {
  name: string;
  link: string;
}

const MainNav = () => {
  const router = useRouter();
  console.log(router.pathname);

  const navItems: NavItem[] = [
    {
      name: `O mnie`,
      link: `/`,
    },
    {
      name: `Akademia Chiropraktyki`,
      link: `/akademia_chiropraktyki`,
    },
    {
      name: `Akupunktura Chiropraktyka`,
      link: `/akupunktura_chiropraktyka`,
    },
    {
      name: `Instytut Medycyny Orientalnej`,
      link: `/insytut_medycyny_orientalnej`,
    },
    {
      name: `Szlachetne zdrowie`,
      link: `/szlachetne_zdrowie`,
    },
  ];

  return (
    <>
      <ul className={`container ${mainNavStyles.container}`}>
        {navItems.map((item: NavItem, index) => {
          return (
            <li key={`${item}${index}`}>
              <Link
                href={item.link}
                className={
                  // extract the current route
                  router.pathname === item.link
                    ? `${mainNavStyles.link} ${mainNavStyles.active}`
                    : mainNavStyles.link
                }
              >
                {item.name}
              </Link>
              {router.pathname === item.link && (
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
