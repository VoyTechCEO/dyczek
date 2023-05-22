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

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'szlaZdMain'])),
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
          <article className='container szlaZd-container contact'>
            <h1>Publikacje</h1>
            <section>
              <p>
                <b>Henryk Dyczek</b>
                <br />
                ul. Tulipanowa 6<br />
                87-134 Przysiek k. Torunia
                <br />
                tel: 56 6789 343
                <br />
                e-mail: <a href='mailto: henryk@dyczek.pl'>henryk@dyczek.pl</a>
              </p>
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
