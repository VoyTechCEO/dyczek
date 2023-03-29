import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../../hooks/useSetPageSpecs';
import Link from 'next/link';
import SubNavItem from '../../../interfaces/subNavItem';

const IMO: NextPage = () => {
  const pageSpecs = useSetPageSpecs();

  return (
    <>
      <HeadSet
        title={pageSpecs.title}
        keywords={pageSpecs.keywords}
        desc={pageSpecs.description}
      />
      <main id='main' className='main-yellow'>
        <ImoHeader />
        <MainNav />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container imo-container'>
            <h1>Dane Teleadresowe</h1>
            <p>
              <span>Henryk Dyczek</span>
              <br />
              ul. Tulipanowa 6<br />
              Przysiek k/ Torunia
              <br />
              87-134 Zławieś Wielka
              <br />
              <br />
              tel./faks: (56) 6789 343
              <br />
              e-mail: <a href='mailto: henryk@dyczek.pl'>henryk@dyczek.pl</a>
            </p>
            <br />
            <h1>Mapa dojazdu</h1>
            <img src='/img/mapka.gif' alt='mapa dojazdu' />
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={pageSpecs.sinceYear} />
      </main>
    </>
  );
};

export default IMO;
