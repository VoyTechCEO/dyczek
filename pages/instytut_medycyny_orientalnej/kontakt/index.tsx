import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
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
        'imoMain',
        'imoContact',
      ])),
    },
  };
}

const IMO: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadSet />
      <main id='main' className='main-yellow'>
        <ImoHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container imo-container'>
            <h1>{t('imoContact:head')}</h1>
            <p>
              <span>Henryk Dyczek</span>
              <br />
              ul. Tulipanowa 6
              <br />
              87-134 Przysiek k. Torunia
              <br />
              <br />
              {t('imoContact:contactType')}: 56 6789 343
              <br />
              e-mail: <a href='mailto: henryk@dyczek.pl'>henryk@dyczek.pl</a>
            </p>
            <br />
            <h1>{t('imoContact:mapHead')}</h1>
            <img src='/img/mapka.gif' alt='mapa dojazdu' />
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer />
      </main>
    </>
  );
};

export default IMO;
