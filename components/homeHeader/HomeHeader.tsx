import React from 'react';
import homeHeaderStyles from './homeHeader.module.css';
import HomeIntroduction from '../homeIntroduction/HomeIntroduction';
import IconNav from '../iconNav/IconNav';
import ImoLogo from '../imoLogo/ImoLogo';
import IconNavItem from '../../interfaces/iconNavItem';

const HomeHeader = () => {
  const navItems: IconNavItem[] = [
    {
      name: `Akademia Chiropraktyki`,
      link: `/akademia_chiropraktyki`,
      src: `/img/akademia.png`,
    },
    {
      name: `Akupunktura Chiropraktyka`,
      link: `/akupunktura_chiropraktyka`,
      src: `/svg/akupunktura_chiropraktyka_logo.svg`,
    },
    {
      component: <ImoLogo />,
    },
  ];

  return (
    <>
      <section className={`container ${homeHeaderStyles.container}`}>
        <div className={homeHeaderStyles.banner} />
        <div className={homeHeaderStyles.head}>
          <h1 className={homeHeaderStyles.title}>HENRYK DYCZEK</h1>
          <h2 className={homeHeaderStyles.undertitle}>
            Medycyna Niekonwencjonalna
          </h2>
        </div>
        <HomeIntroduction />
        <IconNav navItems={navItems} />
      </section>
    </>
  );
};

export default HomeHeader;
