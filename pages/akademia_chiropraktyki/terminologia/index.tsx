import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkademiaHeader from '../../../components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '../../../components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import ElementRef from '@/components/elementRef/ElementRef';

interface Props {
  locale: string;
}

interface Explanation {
  name: string;
  desc: string;
  ext?: string[];
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'akademiaChMain',
        'akademiaChTerminology',
      ])),
    },
  };
}

const Akademia: NextPage = () => {
  const { t } = useTranslation();

  const explanationsList: Explanation[] = t(
    'akademiaChTerminology:explanationsList',
    { returnObjects: true }
  );

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article
            className={`container main-container akademiaCh-container terms`}
          >
            <img
              src='/img/chiropraktyka4.png'
              alt='Nauka w Akademii'
              className='view'
            />
            <ElementRef
              element='p'
              content={t('akademiaChTerminology:expIntro')}
            />
            <ul className='explanation'>
              {explanationsList.map((item, index) => {
                return (
                  <li key={`${item.desc}akademiaChExpl${index}`}>
                    ... <b>{item.name}</b>, {item.desc}
                    {item.ext && (
                      <ul>
                        {item.ext.map((extItem, extIndex) => {
                          return (
                            <li key={`${extItem}akademiaChExts${extIndex}`}>
                              {extItem}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <ElementRef
              element='p'
              content={t('akademiaChTerminology:chiropracticDef')}
            />
            <ElementRef
              element='p'
              content={t('akademiaChTerminology:chiropractorDef')}
            />
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
