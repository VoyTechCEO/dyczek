import Footer from '../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../components/headSet/HeadSet';
import MainNav from '../../components/mainNav/MainNav';
import StandardMainContent from '../../components/standardMainContent/StandardMainContent';
import SubNavItem from '../../interfaces/subNavItem';
import { useRouter } from 'next/router';
import ImoHeader from '../../components/imoHeader/ImoHeader';

const IMO: NextPage = () => {
  const router = useRouter();

  const subNavItems: SubNavItem[] = [
    {
      name: `Główna`,
      link: `${router.pathname}`,
    },
    {
      name: `Szkolenia`,
      link: `${router.pathname}/szkolenia`,
    },
    {
      name: `Teksty źródłowe`,
      link: `${router.pathname}/teksty_zrodlowe`,
    },
    {
      name: `Gabinety TMC`,
      link: `${router.pathname}/gabinety_tmc`,
    },
    {
      name: `Wydarzenia`,
      link: `${router.pathname}/wydarzenia`,
    },
    {
      name: `Linki`,
      link: `${router.pathname}/linki`,
    },
    {
      name: `Kontakt`,
      link: `${router.pathname}/kontakt`,
    },
  ];

  return (
    <>
      <HeadSet
        title='Instytut Medycyny Orientalnej'
        keywords='instytut medycyny orientalnej, imo, medycyna orientalna, henryk dyczek'
      />
      <main id='main' className='main-yellow'>
        <ImoHeader />
        <MainNav />
        <StandardMainContent subNavItems={subNavItems}>
          <article className={`container imo-container`}>
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

export default IMO;
