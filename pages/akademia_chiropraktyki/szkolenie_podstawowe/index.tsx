import { NextPage } from 'next';
import React from 'react';
import Footer from '@/components/footer/Footer';
import HeadSet from '@/components/headSet/HeadSet';
import MainNav from '@/components/mainNav/MainNav';
import AkademiaHeader from '@/components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '@/components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '@/components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AkademiaDocument from '@/components/akademiaDocument/AkademiaDocument';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'akademiaChMain'])),
    },
  };
}

const Akademia: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container trainings`}>
            <AkademiaDocument />
            <button className='add'>
              <svg
                width='4mm'
                version='1.1'
                viewBox='0 0 52.917 52.917'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g transform='translate(-115.79 -19.591)'>
                  <path d='m142.25 72.508h-2.6458v-23.813h-23.812v-5.2917h23.812v-23.813h5.2917v23.813h23.812v5.2917h-23.812v23.813z' />
                </g>
              </svg>
              <span>Wstaw nowe szkolenie</span>
            </button>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
