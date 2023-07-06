import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
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
        'akuKosHistory',
      ])),
    },
  };
}

const AkuKos: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadSet />
      <main id='main' className='main-pink'>
        <AkuKosHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container akuKos-container history'>
            <h1>{t('akuKosHistory:header1')}</h1>
            <p>{t('akuKosHistory:paragraph1')}</p>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default AkuKos;
