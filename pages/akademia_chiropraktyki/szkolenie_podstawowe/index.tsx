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
import AkademiaEditor from '@/components/akademiaEditor/AkademiaEditor';
import Link from 'next/link';

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
            <AkademiaEditor />
            <Link
              className='add'
              href='/akademia_chiropraktyki/admin#startView'
            >
              <svg
                id='Warstwa_1'
                data-name='Warstwa 1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 182.63 182.13'
              >
                <rect
                  x='101.93'
                  y='62.41'
                  width='44'
                  height='122.03'
                  transform='translate(-50.98 123.78) rotate(-45)'
                />
                <path d='m59,0c-3.63,0-7.17.34-10.62.97l6.75,6.75,1.14,1.14,26.44,26.44-10.09,37.66-37.66,10.09-26.44-26.44-1.14-1.14-6.51-6.51C.31,52.23,0,55.58,0,59c0,32.58,26.42,59,59,59,32.58,0,59-26.42,59-59,0-32.58-26.42-59-59-59Z' />
              </svg>
              <span>Narzędzia administratora</span>
            </Link>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
