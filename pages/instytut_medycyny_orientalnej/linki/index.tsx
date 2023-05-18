import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import Link from 'next/link';
import SubNavItem from '../../../interfaces/subNavItem';
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
        'imoLinks',
      ])),
    },
  };
}

const IMO: NextPage = () => {
  const { t } = useTranslation();

  const recommendedLinksList: SubNavItem[] = t(
    'imoLinks:recommendedLinksList',
    { returnObjects: true }
  );

  const otherLinksList: SubNavItem[] = t('imoLinks:otherLinksList', {
    returnObjects: true,
  });

  return (
    <>
      <HeadSet />
      <main id='main' className='main-yellow'>
        <ImoHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container imo-container'>
            <h1>{t('imoLinks:headRecommended')}</h1>
            <ul className='dashed'>
              {recommendedLinksList.map((item) => {
                return (
                  <li key={`${item}recommended`}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
            <h1>{t('imoLinks:headOther')}</h1>
            <ul className='dashed'>
              {otherLinksList.map((item) => {
                return (
                  <li key={`${item}recommended`}>
                    <a href={item.link}>{item.name}</a>
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
