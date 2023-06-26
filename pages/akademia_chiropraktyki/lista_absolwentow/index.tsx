import { NextPage } from 'next';
import React, { useState } from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkademiaHeader from '../../../components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '../../../components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AkademiaGraduatesTable from '@/components/akademiaGraduatesTable/AkademiaGraduatesTable';
import { useTranslation } from 'next-i18next';
import AdminTools from '@/components/adminTools/AdminTools';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'akademiaChMain',
        'akademiaChGraduatesList',
      ])),
    },
  };
}

const Akademia: NextPage = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container graduates`}>
            <h1>{t('akademiaChGraduatesList:header1')}</h1>
            {show ? (
              <>
                <AkademiaGraduatesTable />
                <AkademiaGraduatesTable newGrad={true} />
              </>
            ) : (
              <div className='hidden'>
                <div className='gradient' />
                <AkademiaGraduatesTable />
              </div>
            )}
            <button className='show' onClick={() => setShow(!show)}>
              {show ? 'Zwiń listę absolwentów' : 'Rozwiń listę absolwentów'}
              <svg
                height='0.5rem'
                version='1.1'
                viewBox='0 0 60 50'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  transform='matrix(.37382 0 0 .26978 -8.7481 -1.207)'
                  d='m183.91 97.141-160.5 92.667v-92.667-92.667l80.252 46.334z'
                />
              </svg>
            </button>
            <AdminTools />
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
