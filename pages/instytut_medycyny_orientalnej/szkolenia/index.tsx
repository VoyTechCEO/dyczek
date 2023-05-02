import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../../hooks/useSetPageSpecs';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

interface Courses {
  name: string;
  link?: string;
  desc?: string;
}

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'imoMain',
        'imoSzkolenia',
      ])),
    },
  };
}

const IMO: NextPage = () => {
  const pageSpecs = useSetPageSpecs();
  const { t } = useTranslation();

  const coursesList: Courses[] = t('imoSzkolenia:coursesList', {
    returnObjects: true,
  });

  return (
    <>
      <HeadSet />
      <main id='main' className='main-yellow'>
        <ImoHeader />
        <MainNav />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container imo-container'>
            <h1>{t('imoSzkolenia:coursesHead')}</h1>
            <ul className='dashed'>
              {coursesList.map((item) => {
                return (
                  <li key={`${item}courses`} className='space'>
                    {item.link ? (
                      <Link href={item.link} target='_blank'>
                        <b>{item.name}</b>
                      </Link>
                    ) : (
                      <b>{item.name}</b>
                    )}
                    {item.desc && <p className='description'>{item.desc}</p>}
                  </li>
                );
              })}
            </ul>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={pageSpecs.sinceYear} />
      </main>
    </>
  );
};

export default IMO;
