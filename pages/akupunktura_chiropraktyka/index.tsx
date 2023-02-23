import Footer from '../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../components/headSet/HeadSet';
import MainNav from '../../components/mainNav/MainNav';
import AkuChiHeader from '../../components/akuChiHeader/AkuChiHeader';
import StandardMainContent from '../../components/standardMainContent/StandardMainContent';
import SubNavItem from '../../interfaces/subNavItem';
import { useRouter } from 'next/router';

const AkuChi: NextPage = () => {
  const router = useRouter();

  const subNavItems: SubNavItem[] = [
    {
      name: `Główna`,
      link: `${router.pathname}/główna`,
    },
    {
      name: `Kwalifikacje`,
      link: `${router.pathname}/kwalifikacje`,
    },
    {
      name: `Publikacje`,
      link: `${router.pathname}/publikacje`,
    },
    {
      name: `Kontakt`,
      link: `${router.pathname}/kontakt`,
    },
    {
      name: `English`,
      link: `${router.pathname}/english`,
    },
  ];

  return (
    <>
      <HeadSet
        title='Henryk Dyczek - akupunktura i chiropraktyka'
        keywords='akupunktura, chiropraktyka, henryk dyczek, medycyna niekonwencjonalna'
      />
      <main id='main' className='main-blue'>
        <AkuChiHeader />
        <MainNav />
        <StandardMainContent subNavItems={subNavItems} />
        <Footer sinceYear={1999} />
      </main>
    </>
  );
};

export default AkuChi;
