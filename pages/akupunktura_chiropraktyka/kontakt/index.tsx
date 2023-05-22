import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkuChiHeader from '../../../components/akuChiHeader/AkuChiHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AkuKosLogo from '../../../components/akuKosLogo/AkuKosLogo';

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

const AkuChi: NextPage = () => {
  return (
    <>
      <HeadSet />
      <main id='main' className='main-blue'>
        <AkuChiHeader />
        <MainNav />
        <StandardMainContent>
          <article className={`container akuChiro-container contact`}>
            <h1>KONTAKT</h1>
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
              <img src='/img/map.gif' alt='mapa dojazdu' />
            </section>
            <div className='visit'>
              <p>Zapraszam również na stronę Akupunktury Kosmetycznej:</p>
              <AkuKosLogo />
            </div>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default AkuChi;
