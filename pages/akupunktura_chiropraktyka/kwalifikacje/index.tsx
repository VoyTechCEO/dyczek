import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkuChiHeader from '../../../components/akuChiHeader/AkuChiHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
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
        'akuChiQualifications',
      ])),
    },
  };
}

const AkuChi: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeadSet />
      <main id='main' className='main-blue'>
        <AkuChiHeader />
        <MainNav />
        <StandardMainContent>
          <article className={`container akuChiro-container qualifications`}>
            <section>
              <div className='intro'>
                <h1>{t('akuChiQualifications:header1')}</h1>
                <h4>{t('akuChiQualifications:smallHeader')}</h4>
                <p>{t('akuChiQualifications:paragraph1')}</p>
                <p>{t('akuChiQualifications:paragraph2')}</p>
              </div>
              <img src='/img/dyczekHenryk.jpg' alt='Henryk Dyczek' />
            </section>
            <p>{t('akuChiQualifications:paragraph3')}</p>
            <p>{t('akuChiQualifications:paragraph4')}</p>
            <p>{t('akuChiQualifications:paragraph5')}</p>
            <p>{t('akuChiQualifications:paragraph6')}</p>
            <ElementRef
              content={t('akuChiQualifications:paragraph7')}
              element='p'
            />
            <p>{t('akuChiQualifications:paragraph8')}</p>
            <p>{t('akuChiQualifications:paragraph9')}</p>
            <p>{t('akuChiQualifications:paragraph10')}</p>
            <p>{t('akuChiQualifications:paragraph11')}</p>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default AkuChi;
