import { NextPage } from 'next';
import React from 'react';
import Footer from '../../components/footer/Footer';
import HeadSet from '../../components/headSet/HeadSet';
import MainNav from '../../components/mainNav/MainNav';
import StandardMainContent from '../../components/standardMainContent/StandardMainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AkuKosHeader from '@/components/akuKosHeader/AkuKosHeader';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'akuKosMain',
        'akuKosHome',
      ])),
    },
  };
}

const AkuKos: NextPage = () => {
  const { t } = useTranslation();

  const benefitsList: string[] = t('akuKosHome:benefitsList', {
    returnObjects: true,
  });

  return (
    <>
      <HeadSet />
      <main id='main' className='main-pink'>
        <AkuKosHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container main-container akuKos-container home'>
            <h1>{t('akuKosHome:header1')}</h1>
            <p>{t('akuKosHome:paragraph1')}</p>
            <p>{t('akuKosHome:paragraph2')}</p>
            <p>{t('akuKosHome:paragraph3')}</p>
            <b>{t('akuKosHome:bold1')}</b>
            <ul>
              {benefitsList.map((item, index) => {
                return <li key={`${item}akuKosBenefit${index}`}>{item}</li>;
              })}
            </ul>
            <h1>{t('akuKosHome:header2')}</h1>
            <p>{t('akuKosHome:paragraph4')}</p>
            <p>{t('akuKosHome:paragraph5')}</p>
            <p>{t('akuKosHome:paragraph6')}</p>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default AkuKos;
