import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import SzlaZdHeader from '../../../components/szlaZdHeader/SzlaZdHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import SzlaZdFAQElement from '../../../components/szlaZdFAQElement/SzlaZdFAQElement';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import faqList from '@/utils/szlaZdFAQList';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'szlaZdMain',
        'szlaZdQuestions',
      ])),
    },
  };
}

const SzlaZd: NextPage = () => {
  const { t } = useTranslation();
  const bioList: string[] = t('szlaZdQuestions:bioList', {
    returnObjects: true,
  });

  return (
    <>
      <HeadSet />
      <main id='main'>
        <SzlaZdHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container szlaZd-container faq'>
            <h1>{t('szlaZdQuestions:header1')}</h1>
            <ul className='faq'>
              {faqList(t).map((item, index) => {
                return (
                  <SzlaZdFAQElement
                    key={`${item}faqElement${index}`}
                    number={index + 1}
                    question={item.question}
                    answer={item.answer}
                  />
                );
              })}
            </ul>
            <p>Opracował: Henryk Dyczek</p>
            <p>Biografia:</p>
            <ul className='bio'>
              {bioList.map((item, index) => {
                return (
                  <li key={`${item}szlaZdQuestionsBio${index}`}>{item}</li>
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

export default SzlaZd;
