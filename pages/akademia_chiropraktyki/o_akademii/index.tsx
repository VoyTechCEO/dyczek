import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkademiaHeader from '../../../components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '../../../components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
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
        'akademiaChMain',
        'akademiaChAbout',
      ])),
    },
  };
}

const Akademia: NextPage = () => {
  const { t } = useTranslation();

  const scientistsList: string[] = t('akademiaChAbout:scientistsList', {
    returnObjects: true,
  });

  const benefitsList1: string[] = t('akademiaChAbout:benefitsList1', {
    returnObjects: true,
  });

  const benefitsList2: string[] = t('akademiaChAbout:benefitsList2', {
    returnObjects: true,
  });

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container about`}>
            <h1>{t('akademiaChAbout:header1')}</h1>
            <ul>
              {scientistsList.map((item, index) => {
                return (
                  <li key={`${item}akademiaChScientist${index}`}>{item}</li>
                );
              })}
            </ul>
            <img
              src='/img/chiropraktyka2.png'
              alt='Nauka w Akademii'
              className='view'
            />
            <h1>{t('akademiaChAbout:header2')}</h1>
            <ElementRef
              element='p'
              content={t('akademiaChAbout:history')}
              className='hard'
            />
            <ElementRef
              element='p'
              content={t('akademiaChAbout:currently')}
              className='hard'
            />
            <img
              src='/img/chiropraktyka3.png'
              alt='Nauka w Akademii'
              className='view'
            />
            <h1>{t('akademiaChAbout:header3')}</h1>
            <p>{t('akademiaChAbout:target')}</p>
            <ul>
              {benefitsList1.map((item, index) => {
                return (
                  <li key={`${item}akademiaChBenefit1${index}`}>{item}</li>
                );
              })}
            </ul>
            <p>{t('akademiaChAbout:declaration')}</p>
            <ul>
              {benefitsList2.map((item, index) => {
                return (
                  <li key={`${item}akademiaChBenefit2${index}`}>{item}</li>
                );
              })}
            </ul>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
