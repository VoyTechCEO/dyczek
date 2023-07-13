import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import SzlaZdHeader from '../../../components/szlaZdHeader/SzlaZdHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ContactInfo from '@/components/contactInfo/ContactInfo';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'szlaZdMain',
        'szlaZdContact',
      ])),
    },
  };
}

const SzlaZd: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadSet />
      <main id='main'>
        <SzlaZdHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container main-container szlaZd-container contact'>
            <h1>{t('szlaZdContact:headerMain')}</h1>
            <section>
              <ContactInfo />
              <img src='/img/mapka.gif' alt='mapa dojazdu' />
            </section>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer />
      </main>
    </>
  );
};

export default SzlaZd;
