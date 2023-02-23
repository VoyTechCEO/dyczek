import React from 'react';
import akuChiHeaderStyles from './akuChiHeader.module.css';
import IconNav from '../iconNav/IconNav';
import IconNavItem from '../../interfaces/iconNavItem';
import Link from 'next/link';

const AkuChiHeader = () => {
  const navItems: IconNavItem[] = [
    {
      name: `Szlachetne zdrowie`,
      link: `/szlachetne_zdrowie`,
      src: `/img/akademia.png`,
    },
    {
      name: `Akupunktura Kosmetyczna`,
      link: `/akupunktura_kosmetyczna`,
      src: `/img/akupunkturaChiropraktyka.png`,
    },
  ];

  return (
    <section className={`container ${akuChiHeaderStyles.container}`}>
      <div className={akuChiHeaderStyles.banner} />
      <div className={akuChiHeaderStyles.overlay}>
        <Link href='/akupunktura_chiropraktyka'>
          <img
            src='/img/akupunkturaChiropraktyka.png'
            alt='Akupunktura Chiropraktyka'
          />
        </Link>
        <div className={akuChiHeaderStyles.bg} />
      </div>
      <IconNav navItems={navItems} />
    </section>
  );
};

export default AkuChiHeader;
