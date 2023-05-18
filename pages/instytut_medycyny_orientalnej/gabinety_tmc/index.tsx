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
        'imoGabinetyTMC',
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
            <h1>{t('imoGabinetyTMC:head')}</h1>
            <p>
              <span>Henryk Dyczek</span> <br />
              ul. Tulipanowa 6 <br />
              Przysiek k/ Torunia <br />
              87-134 Zławieś Wielka <br />
              <br />
              {t('imoGabinetyTMC:contact')}: (056) 6789 343 <br />
              e-mail:{' '}
              <a href='mailto: henryk.dyczek@man.torun.pl'>
                henryk.dyczek@man.torun.pl
              </a>
            </p>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer />
      </main>
    </>
  );
};

export default IMO;
