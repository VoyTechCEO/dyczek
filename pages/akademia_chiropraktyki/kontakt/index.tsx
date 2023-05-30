import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkademiaHeader from '../../../components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '../../../components/akademiaTrainings/AkademiaTrainings';
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
          <article className={`container akademiaCh-container contact`}>
            <h1>Biuro Akademii</h1>
            <section>
              <p>
                <b>Henryk Dyczek</b>
                <br />
                ul. Tulipanowa 6<br />
                87-134 Przysiek k. Torunia
                <br />
                Tel/Fax: 56 6789 343
                <br />
                e-mail: <a href='mailto: henryk@dyczek.pl'>henryk@dyczek.pl</a>
              </p>
              <p>Zapraszam również na:</p>
              <a href='http://www.chiropraktycy.pl/'>
                <img
                  src='/img/chiropraktycy_polscy_logo.png'
                  alt='Chiropraktycy Polscy'
                />
              </a>
            </section>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
