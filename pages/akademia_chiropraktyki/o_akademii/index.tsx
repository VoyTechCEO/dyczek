import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkademiaHeader from '../../../components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '../../../components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main'])),
    },
  };
}

const Akademia: NextPage = () => {
  const scientistsList = [
    `prof. dr hab. Tadeusz Kasperczyk - specjalista fizjoterapii`,
    `prof. dr hab. Mariusz Posłuszny - specjalista: rehabilitacji ruchowej, anatomii funkcjonalnej, fizjologii i biomechaniki`,
    `lek. med. Piotr Godek - ortopeda trauamatolog`,
    `lek. med. Ihor Solowiow - neurolog`,
  ];

  const benefitsList1 = [
    `otrzymują teoretyczną i praktyczną wiedzę chiropraktyczną`,
    `rozwijają swoje umiejętności manualne`,
    `uczą się efektywnych sposobów porozumiewania się z pacjentem`,
    `poznają swoje mocne i słabe strony`,
    `poznają znaczenie dbałości o swoje zdrowie.`,
  ];

  const benefitsList2 = [
    `stwarza przyjazną, pełną zrozumienia atmosferę, w której uczenie się nie jest wysiłkiem, a zdobywana wiedza i umiejętności przychodzą z łatwością.`,
    `zatrudnia wykładowców o wysokim poziomie wiedzy i o dużym doświadczeniu zawodowym`,
    `prezentuje uczącym się wartości, które motywują ich nauczycieli w codziennym życiu prywatnym i zawodowym, a które są niezbędne dla pełnej satysfakcji w zawodzie chiropraktyka.`,
  ];

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container about`}>
            <h1>Rada naukowa</h1>
            <ul>
              {scientistsList.map((item, index) => {
                return (
                  <li key={`${item}akademiaChScientist${index}`}>{item}</li>
                );
              })}
            </ul>
            <img
              src='/img/chiropraktyka2.png'
              alt='Nauka w Akademii'
              className='view'
            />
            <h1>Historia Akademii Chiropraktyki</h1>
            <p className='hard'>
              Akademia Chiropraktyki rozpoczęła swoją działalność w styczniu
              1999 roku, kursem w zakresie chiropraktyki dla grupy
              fizjoterapeutów i lekarzy. Założycielem i dyrektorem Akademii jest{' '}
              <Link href='/'>Henryk Dyczek</Link> absolwent chiropraktyki Oxford
              Brookes University, Wielka Brytania. Przez lata praktykował on w
              zawodzie chiropraktyka w Wielkiej Brytanii i w Polsce.
            </p>
            <p className='hard'>
              Akademia Chiropraktyki prowadzi obecnie zajęcia w{' '}
              <b>Szkole Chiropraktyki</b> w Toruniu.
            </p>
            <img
              src='/img/chiropraktyka3.png'
              alt='Nauka w Akademii'
              className='view'
            />
            <h1>Celem Akademii Chiropraktyki</h1>
            <p>
              jest wykształcenie wysokiej klasy chiropraktyków. Jest to możliwe,
              gdyż studenci:
            </p>
            <ul>
              {benefitsList1.map((item, index) => {
                return (
                  <li key={`${item}akademiaChBenefit1${index}`}>{item}</li>
                );
              })}
            </ul>
            <p>
              wybiegając na przeciw powyższym założeniom Akademia Chiropraktyki:
            </p>
            <ul>
              {benefitsList2.map((item, index) => {
                return (
                  <li key={`${item}akademiaChBenefit2${index}`}>{item}</li>
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

export default Akademia;
