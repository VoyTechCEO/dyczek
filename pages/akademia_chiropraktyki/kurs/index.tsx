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

interface Course {
  name: string;
  link: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main'])),
    },
  };
}

const Akademia: NextPage = () => {
  const coursesList: Course[] = [
    {
      name: `Kurs Akademii Chiropraktyki`,
      link: `/docs/akademiaCh/Kurs Akademii Chiropraktyki.pdf`,
    },
    {
      name: `Kurs Terapii Czaszkowo-Krzyżowej`,
      link: `http://www.craniosacral.pl/`,
    },
  ];

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container course`}>
            <h1>Akademia Chiropraktyki prowadzi następujące kursy:</h1>
            <ul>
              {coursesList.map((item, index) => {
                return (
                  <li key={`${item.name}akademiaChCourse${index}`}>
                    <Link href={item.link} target='_blank'>
                      {item.name}
                    </Link>
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

export default Akademia;
