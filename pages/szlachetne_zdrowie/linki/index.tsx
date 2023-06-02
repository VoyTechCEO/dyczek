import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import SzlaZdHeader from '../../../components/szlaZdHeader/SzlaZdHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

interface Props {
  locale: string;
}

interface Site {
  desc: string;
  link: string;
  title?: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'szlaZdMain'])),
    },
  };
}

const SzlaZd: NextPage = () => {
  const { t } = useTranslation();

  const linksList: Site[] = [
    {
      desc: `Chcesz skorzystać z moich usług:`,
      link: `/`,
      title: `Henryk Dyczek`,
    },
    {
      desc: `Chcesz zakupić i urządzenia pomagające zdrowiej żyć, z których osobiście korzystam (będziesz potrzebował w tym mojej pomocy):`,
      link: `http://www.nikken.co.uk/connect/`,
    },
    {
      desc: `Chcesz znaleźć chiropraktyka, który był kiedyś moim studentem:`,
      link: `http://www.chiropraktycy.pl/`,
    },
    {
      desc: `Chcesz sam poznać naukę i sztukę chiropraktyki:`,
      link: `/akademia_chiropraktyki/`,
      title: `Akademia Chiropraktyki`,
    },
    {
      desc: `Chcesz poprawić swój wygład i samopoczucie:`,
      link: `/akupunktura_kosmetyczna/`,
      title: `Akupunktura kosmetyczna`,
    },
    {
      desc: `Interesuje Cię medycyna orientalna:`,
      link: `/instytut_medycyny_orientalnej/`,
      title: `Instytut Medycyny Orientalnej`,
    },
  ];

  return (
    <>
      <HeadSet />
      <main id='main'>
        <SzlaZdHeader />
        <MainNav />
        <StandardMainContent>
          <article className='container szlaZd-container links'>
            <h1>Linki</h1>
            <ul>
              {linksList.map((item, index) => {
                return (
                  <li key={`${item}szlaZdLinks${index}`}>
                    <p>{item.desc}</p>
                    <Link href={item.link} target='_blank'>
                      {item.title ? item.title : item.link}
                    </Link>
                  </li>
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
