import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AkuKosHeader from '@/components/akuKosHeader/AkuKosHeader';
import ElementRef from '@/components/elementRef/ElementRef';
import Link from 'next/link';

interface Props {
  locale: string;
}

interface AboutInfo {
  content: string;
  link?: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'akuKosMain',
        'akuKosAbout',
      ])),
    },
  };
}

const AkuKos: NextPage = () => {
  const { t } = useTranslation();

  const aboutList: AboutInfo[] = t('akuKosAbout:aboutList', {
    returnObjects: true,
  });

  return (
    <>
      <HeadSet />
      <main id='main' className='main-pink'>
        <AkuKosHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container akuKos-container about'>
            <h1>{t('akuKosAbout:header1')}</h1>
            <ul>
              {aboutList.map((item, index) => {
                return (
                  <li key={`${item.content}akuKosAbout${index}`}>
                    <ElementRef element='p' content={item.content} />
                    {item.link && (
                      <Link href={item.link} target='_blank'>
                        {t('akuKosAbout:view')}
                      </Link>
                    )}
                  </li>
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

export default AkuKos;
