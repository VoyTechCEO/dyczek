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

interface Props {
  locale: string;
}

interface Thread {
  question: string;
  answer: string[];
  list?: string[];
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'main',
        'akuKosMain',
        'akuKosQuestions',
      ])),
    },
  };
}

const AkuKos: NextPage = () => {
  const { t } = useTranslation();

  const threadsList: Thread[] = t('akuKosQuestions:threadsList', {
    returnObjects: true,
  });

  return (
    <>
      <HeadSet />
      <main id='main' className='main-pink'>
        <AkuKosHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container akuKos-container questions'>
            <ul className='threads'>
              {threadsList.map((item, index) => {
                return (
                  <li
                    className='thread'
                    key={`${item.question}akuKosThread${index}`}
                  >
                    <h1>{item.question}</h1>
                    <ul className='answers'>
                      {item.answer.map((answerItem, answerIndex) => {
                        return (
                          <li key={`${answerItem}akuKosAnswer${answerIndex}`}>
                            <ElementRef element='p' content={answerItem} />
                          </li>
                        );
                      })}
                    </ul>
                    {item.list && (
                      <ul className='benefits'>
                        {item.list.map((benefitItem, benefitIndex) => {
                          return (
                            <li
                              key={`${benefitItem}akuKosThreadBenefit${benefitIndex}`}
                            >
                              {benefitItem}
                            </li>
                          );
                        })}
                      </ul>
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
