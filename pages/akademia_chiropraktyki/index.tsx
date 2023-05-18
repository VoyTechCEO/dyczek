import { NextPage } from 'next';
import React from 'react';
import Footer from '@/components/footer/Footer';
import HeadSet from '@/components/headSet/HeadSet';
import MainNav from '@/components/mainNav/MainNav';
import AkademiaHeader from '@/components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '@/components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '@/components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main'])),
    },
  };
}

const Akademia: NextPage = () => {
  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container home`}>
            <h1>Opinie o szkoleniach. Dlaczego chiropraktyka?</h1>
            <p>--- TU WSTAWIĆ FILMY ---</p>
            <img src='/img/p_01.jpg' alt='Nauka w Akademii' />
            <p>
              <b>Akademia Chiropraktyki</b> oferuje Państwu wyjątkową możliwość
              poznania sztuki i nauki <b>Chiropraktyki</b> całego aparatu ruchu.
            </p>
            <p>Odwiedź również:</p>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
