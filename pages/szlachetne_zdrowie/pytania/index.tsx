import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import SzlaZdHeader from '../../../components/szlaZdHeader/SzlaZdHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import SzlaZdFAQElement from '../../../components/szlaZdFAQElement/SzlaZdFAQElement';
import useSetPageSpecs from '../../../hooks/useSetPageSpecs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import faqList from '@/utils/szlaZdFAQList';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'szlaZdMain'])),
    },
  };
}

const SzlaZd: NextPage = () => {
  const pageSpecs = useSetPageSpecs();
  const { t } = useTranslation();

  return (
    <>
      <HeadSet />
      <main id='main'>
        <SzlaZdHeader />
        <MainNav />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container szlaZd-container faq'>
            <h1>F.A.Q. - Pytania i odpowiedzi</h1>
            <ul className='faq'>
              {faqList.map((item, index) => {
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
              <li>
                Higa t. 2003. Rewolucja w ochronie naszej planety. Puławy:
                Greenland-Technologia EM
              </li>
              <li>
                Rath M. 2007. Dlaczego zwierzęta nie dostają zawałów serca?{' '}
                <a href='www.rath-eduserv.com'>www.rath-eduserv.com</a>
              </li>
            </ul>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={pageSpecs.sinceYear} />
      </main>
    </>
  );
};

export default SzlaZd;
