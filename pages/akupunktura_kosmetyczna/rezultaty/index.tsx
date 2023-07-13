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

interface EffectImg {
  srcBefore: string;
  srcAfter: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'akuKosMain',
        'akuKosResults',
      ])),
    },
  };
}

const AkuKos: NextPage = () => {
  const { t } = useTranslation();

  const imgList: EffectImg[] = [
    {
      srcBefore: `/img/akuKosBefore001.jpg`,
      srcAfter: `/img/akuKosAfter001.jpg`,
    },
    {
      srcBefore: `/img/akuKosBefore002.jpg`,
      srcAfter: `/img/akuKosAfter002.jpg`,
    },
    {
      srcBefore: `/img/akuKosBefore003.jpg`,
      srcAfter: `/img/akuKosAfter003.jpg`,
    },
    {
      srcBefore: `/img/akuKosBefore004.jpg`,
      srcAfter: `/img/akuKosAfter004.jpg`,
    },
    {
      srcBefore: `/img/akuKosBefore005.jpg`,
      srcAfter: `/img/akuKosAfter005.jpg`,
    },
  ];

  const commentsList: string[] = t('akuKosResults:commentsList', {
    returnObjects: true,
  });

  return (
    <>
      <HeadSet />
      <main id='main' className='main-pink'>
        <AkuKosHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container main-container akuKos-container results'>
            <h1>{t('akuKosResults:header1')}</h1>
            <p className='standard'>{t('akuKosResults:paragraph1')}</p>
            <p className='standard'>{t('akuKosResults:paragraph2')}</p>
            <p className='standard'>{t('akuKosResults:paragraph3')}</p>
            <ul className='images'>
              {imgList.map((item, index) => {
                return (
                  <li key={`${item.srcBefore}akuKosImage${index}`}>
                    <div className='preview'>
                      <img src={item.srcBefore} alt='Zdjęcie przed leczeniem' />
                      <p>{t('akuKosResults:before')}</p>
                    </div>
                    <div className='preview'>
                      <img src={item.srcAfter} alt='Zdjęcie po leczeniu' />
                      <p>{t('akuKosResults:after')}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h1>{t('akuKosResults:header2')}</h1>
            <ul className='comments'>
              {commentsList.map((item, index) => {
                return <li key={`${item}akuKosComment${index}`}>{item}</li>;
              })}
            </ul>
            <p className='source'>
              {t('akuKosResults:src')}:{' '}
              <a
                href='http://zdrowie.onet.pl/1470227,2039,,,,po_co_leki_dajcie_igly_,profilaktyka.html'
                target='_blank'
                rel='noreferrer'
              >
                http://zdrowie.onet.pl/1470227,2039,,,,po_co_leki_dajcie_igly_,profilaktyka.html
              </a>{' '}
              [{t('akuKosResults:access')} 30.08.08]
            </p>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default AkuKos;
