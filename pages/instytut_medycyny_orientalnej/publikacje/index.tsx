import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import Link from 'next/link';
import imoPublicsList from '../../../utils/imoPublicsList';
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
        'imoPublikacje',
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
          <article className='container main-container imo-container'>
            <h1>{t('imoPublikacje:head')}</h1>
            <ul>
              {imoPublicsList(t).map((sector, sectorIdx) => {
                return (
                  <li
                    key={`${sector}publicsSectors${sectorIdx}`}
                    className='public-sector'
                  >
                    <h2>{sector.year}</h2>
                    <ul>
                      {sector.publics.map((item) => {
                        return (
                          <li key={`${item}publics`} className='post'>
                            <p className='align-left'>
                              <span>{item.header}</span>
                            </p>
                            <h4>{t('imoPublikacje:author')}:</h4>
                            <p className='align-left'>{item.author}</p>
                            <h4>{t('imoPublikacje:summaryHead')}:</h4>
                            <>{item.short && item.short}</>
                            <Link href={`/docs/imo/${item.doc}`}>
                              {t('imoPublikacje:download')} ({item.doc})
                              {item.english
                                ? ` - ${t('imoPublikacje:enVersion')}`
                                : ` - ${t('imoPublikacje:plVersion')}`}
                            </Link>
                            <div className='line' />
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
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
