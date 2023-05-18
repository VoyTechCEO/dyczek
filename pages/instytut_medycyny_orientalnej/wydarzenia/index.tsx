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
        'imoWydarzenia',
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
            <h1>{t('imoWydarzenia:head')}</h1>
            <ul>
              <li>
                <h3>2004</h3>
                <h4>{t('imoWydarzenia:event')}</h4>
                <p>{t('imoWydarzenia:eventContent')}</p>
              </li>
            </ul>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer />
      </main>
    </>
  );
};

export default IMO;
