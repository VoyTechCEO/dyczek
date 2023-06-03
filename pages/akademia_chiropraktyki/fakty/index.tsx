import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkademiaHeader from '../../../components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '../../../components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'akademiaChMain',
        'akademiaChFacts',
      ])),
    },
  };
}

const Akademia: NextPage = () => {
  const { t } = useTranslation();
  const factsList: string[] = t('akademiaChFacts:factsList', {
    returnObjects: true,
  });

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container facts`}>
            <img
              src='/img/chiropraktyka5.png'
              alt='Nauka w Akademii'
              className='view'
            />
            <h1>{t('akademiaChFacts:header1')}</h1>
            <ul>
              {factsList.map((item, index) => {
                return <li key={`${item}akademiaChFact${index}`}>{item}</li>;
              })}
            </ul>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
