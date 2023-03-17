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
      link: `${router.pathname}`,
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
        <StandardMainContent subNavItems={subNavItems}>
          <article className={`container akuChiro-container`}>
            <h1>AKUPUNKTURA</h1>
            <p>
              Pobudza naturalne możliwości przywracania dobrego stanu zdrowia
              przez organizm ludzki.
            </p>
            <h1>CHIROPRAKTYKA</h1>
            <p>
              Jest efektywną i bezpieczną metodą przywracania zdrowia przez
              delikatne manipulacje dłońmi na kręgosłupie i innych stawach.
            </p>
            <h1>JEŻELI MASZ PROBLEM Z:</h1>
            <p>BÓLAMI</p>
            <ul>
              <li>kręgosłupa</li>
              <li>krzyża</li>
              <li>głowy</li>
              <li>mięśni</li>
              <li>stawów</li>
            </ul>{' '}
            <p>ZABURZENIAMI</p>
            <ul>
              <li>trawienia</li>
              <li>snu</li>
              <li>krążenia </li>
              <li>cyklu miesiączkowego</li>
              <li>płodności</li>
            </ul>
            <p>NERWICAMI, STANAMI DEPRESYJNYMI, CHOROBAMI SKÓRY</p>
            <h1>TO NIE TRAĆ CZASU TYLKO ZADZWOŃ DO MNIE LUB PRZYJDŹ!!!</h1>
            <h1>Uwaga!!!</h1>
            <p>
              Organizuję kursy, szkoleniowe w zakresie chiropraktyki i
              akupunktury dla lekarzy medycyny i fizjoterapeutów w języku
              polskim i angielskim.
            </p>
          </article>
        </StandardMainContent>
        <Footer sinceYear={1999} />
      </main>
    </>
  );
};

export default AkuChi;
