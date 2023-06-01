import { NextPage } from 'next';
import React from 'react';
import Footer from '../../components/footer/Footer';
import HeadSet from '../../components/headSet/HeadSet';
import MainNav from '../../components/mainNav/MainNav';
import SzlaZdHeader from '../../components/szlaZdHeader/SzlaZdHeader';
import StandardMainContent from '../../components/standardMainContent/StandardMainContent';
import SmallerInfo from '../../components/smallerInfo/SmallerInfo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ElementRef from '@/components/elementRef/ElementRef';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'szlaZdMain',
        'szlaZdHome',
      ])),
    },
  };
}

const SzlaZd: NextPage = () => {
  const { t } = useTranslation();
  const advantagesList: string[] = t('szlaZdHome:advantagesList', {
    returnObjects: true,
  });
  const disadvantagesList: string[] = t('szlaZdHome:disadvantagesList', {
    returnObjects: true,
  });

  return (
    <>
      <HeadSet />
      <main id='main'>
        <SzlaZdHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container szlaZd-container about'>
            <div className='quotes'>
              <div className='quote'>
                <p>
                  XVI wiek
                  <br />
                  <br />
                  Ślachetne zdrowie,
                  <br /> Nikt się nie dowie,
                  <br /> Jako smakujesz,
                  <br /> Aż się zepsujesz.
                </p>
                <p className='author'>Jan Kochanowski (1530-1584)</p>
              </div>
              <div className='quote'>
                <p>
                  XXI wiek
                  <br />
                  <br />
                  Zdrowie i choroba określone są na poziomie milionów komórek
                  tworzących nasze ciało i organy.
                </p>
                <p className='author'>Dr med. Mathias Rath, 2007r.</p>
              </div>
            </div>
            <h1>W obecnych czasach mamy:</h1>
            <div className='descriptions'>
              <ul className='description'>
                {advantagesList.map((item, index) => {
                  return (
                    <li key={`${item}szlaZdHomeAdvantages${index}`}>{item}</li>
                  );
                })}
              </ul>
              <ul className='description'>
                {disadvantagesList.map((item, index) => {
                  return (
                    <li key={`${item}szlaZdHomeAdvantages${index}`}>{item}</li>
                  );
                })}
              </ul>
              <div className='letter'>
                <div className='content'>
                  <ElementRef
                    element='section'
                    content={t('szlaZdHome:speech')}
                  />
                  <img src='/img/dyczekHenryk2.jpg' alt='Henryk Dyczek' />
                </div>
                <ElementRef element='p' content={t('szlaZdHome:letterEnd')} />
              </div>
            </div>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer />
      </main>
    </>
  );
};

export default SzlaZd;
