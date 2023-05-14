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

  const articlesList = [
    `A. Ozarowski - Najwyzszy czas na suplementacje.pdf`,
    `CordyMax - broszura.pdf`,
    `Dawkowanie witamin.pdf`,
    `Henryk Dyczek - Jak zwiekszyc wydajnosc pracy.pdf`,
    `Henryk Dyczek - Program Profilaktyki Prozdrowotnej.pdf`,
    `Henryk Dyczek - Skazani na suplementacje.pdf`,
    `Henryk Dyczek - Wolne rodniki.pdf`,
    `Krawczyk K i Rybakowski J. - Omega3 w depresji.pdf`,
    `Lestem Packer - Karetonoidy.pdf`,
    `Lifepak 2001 HCPG in ENGLISH.pdf`,
    `lifepak_clinical study.pdf`,
    `Niebianski nektar.pdf`,
    `Selen, a nowotwory u mezczyzn.pdf`,
    `Suplement LifePak - dokladny opis 2006.pdf`,
    `Tran na klopoty z mysleniem.pdf`,
    `Wzmocnienie systemu immunologicznego broszura Tegreen Cholestin Omega.pdf`,
  ];

  const presentationsList = [
    `Henryk Dyczek - Choroby cywilizacyjne.pdf`,
    `NIKKEN Far Infrared FIR AND Negative Ion - Zjazd Chiropraktykow Sep-4-2009.pdf`,
    `System Snu NIKKEN - Zohar Rothmann.pdf`,
    `Henryk Dyczek - BetaKaroten.pdf`,
    `Henryk Dyczek - Sekret dobrego zdrowia.pdf`,
    `Henryk Dyczek - Skolioza idiopatyczna boczna - kolagen a suplementacja.pdf`,
    `Henryk Dyczek - Suplementacja, co to jest.pdf`,
    `Henryk Dyczek - Suplementacja, moda czy rozsadek.pdf`,
    `Henryk Dyczek - Wyjalowienie wspolczesnego czlowieka.pdf`,
  ];

  return (
    <>
      <HeadSet />
      <main id='main'>
        <SzlaZdHeader />
        <MainNav />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container szlaZd-container publics'>
            <h1>Publikacje</h1>
            <p>Artykuły</p>
            <ul>
              {articlesList.map((item, index) => {
                return (
                  <li>
                    <Link
                      key={`${item}szlaZdArticlePublics${index}`}
                      href={`/docs/szlaZd/${item}`}
                      target='_blank'
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p>Prezentacje</p>
            <ul>
              {presentationsList.map((item, index) => {
                return (
                  <li>
                    <Link
                      key={`${item}szlaZdPresentationPublics${index}`}
                      href={`/docs/szlaZd/${item}`}
                      target='_blank'
                    >
                      {item}
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
