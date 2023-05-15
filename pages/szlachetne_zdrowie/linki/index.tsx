import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import SzlaZdHeader from '../../../components/szlaZdHeader/SzlaZdHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../../hooks/useSetPageSpecs';
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
  const pageSpecs = useSetPageSpecs();
  const { t } = useTranslation();

  const linksList: Site[] = [
    {
      desc: `Potrzeby żywieniowe naszego organizmu:`,
      link: `http://www.nuskin.com/intercom/editorial.do?contentId=eu.px.nutritionals.requirements`,
    },
    {
      desc: `Podstawowe składniki pokarmowe:`,
      link: `http://www.nuskin.com/intercom/editorial.do?contentId=eu.px.nutritionals.requirements.macronutrients`,
    },
    {
      desc: `Mikroelementy: witaminy i minerały:`,
      link: `http://www.nuskin.com/intercom/editorial.do?contentId=eu.px.nutritionals.requirements.micronutrients`,
    },
    {
      desc: `Rola suplementacji:`,
      link: `http://www.nuskin.com/intercom/editorial.do?contentId=eu.px.nutritionals.supplementation`,
    },
    {
      desc: `Co to są wolne rodniki i antyoksydanty?`,
      link: `http://www.nuskin.com/intercom/editorial.do?contentId=eu.px.nutritionals.antioxidants`,
    },
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
      desc: `Chcesz zakupić mikroelementy, które konsumuję osobiście i polecam innym (potrzebujesz znać mój NUMER ID PL0146110 - jako sponsora)?:`,
      link: `https://www.nuskin.com/intercom/signOut.do?nextPage=/intercom/onlineDA.do`,
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
      desc: `Chcesz pomagać innym akupunkturą:`,
      link: `http://www.akupunktura.edu.pl/`,
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
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container szlaZd-container links'>
            <h1>Publikacje</h1>
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
        <Footer sinceYear={pageSpecs.sinceYear} />
      </main>
    </>
  );
};

export default SzlaZd;
