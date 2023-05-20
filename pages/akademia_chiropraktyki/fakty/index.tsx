import { NextPage } from 'next';
import React from 'react';
import Footer from '../../../components/footer/Footer';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkademiaHeader from '../../../components/akademiaHeader/AkademiaHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import AkademiaTrainings from '../../../components/akademiaTrainings/AkademiaTrainings';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container facts`}>
            <img
              src='/img/chiropraktyka5.png'
              alt='Nauka w Akademii'
              className='view'
            />
            <h1>
              Zawód chiropraktyka powstał w Stanach Zjednoczonych Ameryki
              Północnej w 1895 roku.
            </h1>
            <ul>
              <li>
                Chiropraktyka jest drugim co do ilości zatrudnionych zawodem
                medycznym w podstawowej opiece zdrowotnej w Stanach
                Zjednoczonych.
              </li>
              <li>
                Chiropraktyka jest oficjalnie uznawana w Stanach Zjednoczonych,
                Kanadzie, Szwajcarii, Niemczech, Nowej Zelandii, Australii,
                Boliwii, w krajach skandynawskich, Francji, Włoszech, Wielkiej
                Brytanii Południowej Afryce, Rodezji, Japonii, Wenezueli oraz
                Peru.
              </li>
              <li>
                Statystyki z towarzystw ubezpieczeniowych w Stanach
                Zjednoczonych, porównujących opiekę chiropraktyczną z medyczną
                wskazują, że opieka chiropraktyczna wymaga mniejszych kosztów
                zabiegów oraz niższych odszkodowań pourazowych oraz zmniejsza
                ilość godzin nieobecności w pracy. Poza tym zmniejsza przypadki
                inwalidztwa i cierpienia w stosunku do podobnych przypadków,
                które pozostawały wyłącznie pod opieka medyczną.
              </li>
              <li>
                Chiropraktyka nie stwarza najmniejszego zagrożenia dla zdrowia
                człowieka i jest jednym z zawodów, który wymaga ciągłego
                dokształcania.
              </li>
            </ul>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
