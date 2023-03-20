import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../../hooks/useSetPageSpecs';

const IMO: NextPage = () => {
  const pageSpecs = useSetPageSpecs();

  return (
    <>
      <HeadSet
        title='Instytut Medycyny Orientalnej'
        keywords='instytut medycyny orientalnej, imo, medycyna orientalna, henryk dyczek'
      />
      <main id='main' className='main-yellow'>
        <ImoHeader />
        <MainNav />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container imo-container'>
            <h1>W przygotowaniu...</h1>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={1999} />
      </main>
    </>
  );
};

export default IMO;
