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

interface Courses {
  name: string;
  link?: string;
  desc?: string;
}

const IMO: NextPage = () => {
  const pageSpecs = useSetPageSpecs();

  const coursesList: Courses[] = [
    {
      name: `SZKOŁA AKUPUNKTURY TRADYCYJNEJ`,
      link: `https://szkolakupunktury.edu.pl/`,
    },
    {
      name: `KURS TRADYCYJNEJ MEDYCYNY CHIŃSKIEJ`,
      link: `/instytut_medycyny_orientalnej/szkolenia/kurs_tmc`,
      desc: `Monumentalny kurs w zakresie Tradycyjnej Chińskiej Medycyny (TMC). Kurs został podzielony na pięć części, a w sumie składa się z 80 modułów o różnej tematyce.`,
    },
    {
      name: `KURS QI GONG DLA ZDROWIA`,
      desc: `Przeznaczony dla osób zainteresowanych wzmocnieniem i uaktywnieniem swojego Qi dla lepszego samopoczucia, zdrowia i optymalizacji indywidualnych umiejętności.`,
    },
    {
      name: `SZKOŁA AKUPUNKTURY TRADYCYJNEJ`,
    },
    {
      name: `SZKOŁA AKUPUNKTURY TRADYCYJNEJ`,
    },
  ];

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
            <h1>Propozycje szkoleń</h1>
            <ul className='dashed'>
              {coursesList.map((item) => {
                return (
                  <li key={`${item}courses`} className='space'>
                    {item.link ? (
                      <Link href={item.link} target='_blank'>
                        <b>{item.name}</b>
                      </Link>
                    ) : (
                      <b>{item.name}</b>
                    )}
                    {item.desc && <p className='description'>{item.desc}</p>}
                  </li>
                );
              })}
            </ul>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={pageSpecs.sinceYear} />
      </main>
    </>
  );
};

export default IMO;
