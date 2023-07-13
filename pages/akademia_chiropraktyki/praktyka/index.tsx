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

interface Instruction {
  name: string;
  desc: string | JSX.Element;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'akademiaChMain',
        'akademiaChPractice',
      ])),
    },
  };
}

const Akademia: NextPage = () => {
  const { t } = useTranslation();

  const basicsList: Instruction[] = t('akademiaChPractice:basicsList', {
    returnObjects: true,
  });

  const methodsList: Instruction[] = t('akademiaChPractice:methodsList', {
    returnObjects: true,
  });

  const medHolList: string[] = t('akademiaChPractice:medHolList', {
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
          <article
            className={`container main-container akademiaCh-container practice`}
          >
            <img
              src='/img/chiropraktyka6.png'
              alt='Nauka w Akademii'
              className='view'
            />
            <h1>{t('akademiaChPractice:header1')}</h1>
            <p>{t('akademiaChPractice:chiroFact')}</p>
            <ol>
              {basicsList.map((item, index) => {
                return (
                  <li key={`${item.name}akademiaChBasic${index}`}>
                    <b>{item.name}.</b> {item.desc}
                  </li>
                );
              })}
            </ol>
            <img
              src='/img/chiropraktyka7.png'
              alt='Nauka w Akademii'
              className='view'
            />
            <h1>{t('akademiaChPractice:header2')}</h1>
            <ol>
              {methodsList.map((item, index) => {
                return (
                  <ElementRef
                    key={`${item.name}akademiaChMethod${index}`}
                    element='li'
                    content={`<b>${item.name}:</b> ${item.desc}`}
                  />
                );
              })}
            </ol>
            <h1 id='holistic'>{t('akademiaChPractice:header3')}</h1>
            <p>{t('akademiaChPractice:holDef')}</p>
            <h1>{t('akademiaChPractice:header4')}</h1>
            <ol>
              {medHolList.map((item, index) => {
                return (
                  <ElementRef
                    key={`${item}akademiaChMedHol${index}`}
                    element='li'
                    content={item}
                  />
                );
              })}
            </ol>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
