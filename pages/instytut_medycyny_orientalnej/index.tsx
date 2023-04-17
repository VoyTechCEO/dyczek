import Footer from '../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../components/headSet/HeadSet';
import MainNav from '../../components/mainNav/MainNav';
import StandardMainContent from '../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../hooks/useSetPageSpecs';
import LangChangeBtn from '../../components/langChangeBtn/LangChangeBtn';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ElementRef from '../../components/elementRef/ElementRef';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['imoHome'])),
    },
  };
}

const IMO: NextPage<Props> = (props) => {
  const pageSpecs = useSetPageSpecs();
  const { t } = useTranslation();

  const targetList: string[] = t('imoHome:target', { returnObjects: true });

  return (
    <>
      <HeadSet
        title='Instytut Medycyny Orientalnej'
        keywords='instytut medycyny orientalnej, imo, medycyna orientalna, henryk dyczek'
      />
      <main id='main' className='main-yellow'>
        <ImoHeader />
        <MainNav />
        <LangChangeBtn />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container imo-container'>
            <h1>Nasze cele</h1>
            <ul className='dashed'>
              {targetList.map((item, index) => {
                return <li key={`${item}targets${index}`}>{item}</li>;
              })}
            </ul>
            <h1>Nasza misja</h1>
            <ElementRef element='p' content={t('imoHome:mission')} />
            <h1>Henryk Dyczek</h1>
            <p>Listopad, 2004</p>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={1999} />
      </main>
    </>
  );
};

export default IMO;
