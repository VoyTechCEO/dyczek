import Footer from '../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../components/headSet/HeadSet';
import MainNav from '../../components/mainNav/MainNav';
import AkuChiHeader from '../../components/akuChiHeader/AkuChiHeader';
import StandardMainContent from '../../components/standardMainContent/StandardMainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'akuChiHome'])),
    },
  };
}

const AkuChi: NextPage = () => {
  const { t } = useTranslation();
  const placesList: string[] = t('akuChiHome:places', { returnObjects: true });
  const sortsList: string[] = t('akuChiHome:sort', {
    returnObjects: true,
  });

  return (
    <>
      <HeadSet />
      <main id='main' className='main-blue'>
        <AkuChiHeader />
        <MainNav />
        <StandardMainContent>
          <article
            className={`container main-container akuChiro-container home`}
          >
            <h1>{t('akuChiHome:header1')}</h1>
            <p>{t('akuChiHome:paragraph1')}</p>
            <h1>{t('akuChiHome:header2')}</h1>
            <p>{t('akuChiHome:paragraph2')}</p>
            <h1>{t('akuChiHome:header3')}</h1>
            <p>{t('akuChiHome:problem1')}</p>
            <ul>
              {placesList.map((item, index) => {
                return <li key={`${item}akuChiPlace${index}`}>{item}</li>;
              })}
            </ul>
            <p>{t('akuChiHome:problem2')}</p>
            <ul>
              {sortsList.map((item, index) => {
                return <li key={`${item}akuChiSort${index}`}>{item}</li>;
              })}
            </ul>
            <p>{t('akuChiHome:diseases')}</p>
            <h1>{t('akuChiHome:order')}</h1>
            <h1>{t('akuChiHome:header4')}</h1>
            <p>{t('akuChiHome:paragraph3')}</p>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default AkuChi;
