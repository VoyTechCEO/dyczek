import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import ContactInfo from '@/components/contactInfo/ContactInfo';
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
          <article className='container main-container imo-container'>
            <h1>{t('imoContact:head')}</h1>
            <ContactInfo />
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
