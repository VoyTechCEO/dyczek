import { NextPage } from 'next';
import React from 'react';
import Footer from '../../components/footer/Footer';
import HeadSet from '../../components/headSet/HeadSet';
import MainNav from '../../components/mainNav/MainNav';
import StandardMainContent from '../../components/standardMainContent/StandardMainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import AkuKosHeader from '@/components/akuKosHeader/AkuKosHeader';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'akuKosMain'])),
    },
  };
}

const AkuKos: NextPage = () => {
  const { t } = useTranslation();

  const benefitsList = [
    'redukuje zmarszczki',
    'usuwa worki pod oczami',
    'podnowi opadające powieki',
    'poprawia owal twarzy',
    'ujędrnia i nawilża skórę twarzy',
    'ożywia blask oczu',
    'poprawia samopoczucie',
  ];

  return (
    <>
      <HeadSet />
      <main id='main' className='main-pink'>
        <AkuKosHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container akuKos-container home'>
            <h1>Akupunktura kosmetyczna</h1>
            <p>
              <b>Akupunktura kosmetyczna</b> to świetny sposób na odmłodzenie
              twarzy i ujędrnienie ciała.
            </p>
            <p>
              Polega na nakłuwaniu odpowiednich punktów mięśni twarzy, co
              poprawia ich elastyczność i wyraźnie odmładza twarz. Stosuje się
              ją również na nogach, ramoinach i tułowiu w celu zrównoważenia
              energii życia.
            </p>
            <p>
              Akupunktura jest metodą w pełni naturalną. Wywodzi się z Chin i
              obecnie przeżywa swój renesans. Jest zdrową alternatywą operacji
              plastycznych oraz stosowania Botoxu (toksyny botulinowej).
            </p>
            <b>Akupunktura kosmetyczna:</b>
            <ul>
              {benefitsList.map((item, index) => {
                return <li key={`${item}akuKosBenefit${index}`}>{item}</li>;
              })}
            </ul>
            <h1>Efekty akupunktury kosmetycznej</h1>
            <p>
              Badania opublikowane w Journal of Clinical Acupuncture pokazują,
              że aż 90% osób poddanych zabiegom akupunktury kosmetycznej,
              zauważyło poprawę w wyglądzie skóry twarzy już po pierwszym
              zabiegu.
            </p>
            <p>
              Efektem kuracji akupunkturą kosmetyczną jest nie tylko świeższa i
              gładsza twarz, ale także poczucie wewnętrznej harmonii i radości
              życia.
            </p>
            <p>
              Gazeta "The Irish Times" uznała akupunkturę kosmetyczną za:
              "opłacalną alternatywę chirurgii kosmetycznej, której efekty nie
              ograniczają się jedynie do poprawienia wyglądu twarzy."
            </p>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default AkuKos;
