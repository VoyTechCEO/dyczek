import React from 'react';
import homeHeaderStyles from './homeHeader.module.css';
import HomeIntroduction from '../homeIntroduction/HomeIntroduction';
import IconNav from '../iconNav/IconNav';
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
      src: `/img/akupunkturaChiropraktyka.png`,
    },
    {
      name: `Instytut Medycyny Orientalnej`,
      link: `/instytut_medycyny_orientalnej`,
      src: `/img/instytutMedycynyOrientalnej.png`,
      showName: true,
    },
  ];

  return (
    <>
      <section className={`container ${homeHeaderStyles.container}`}>
        <div className={homeHeaderStyles.baner} />
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
