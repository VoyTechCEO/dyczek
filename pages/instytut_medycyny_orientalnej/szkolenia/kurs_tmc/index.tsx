import Footer from '../../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../../components/headSet/HeadSet';
import MainNav from '../../../../components/mainNav/MainNav';
import StandardMainContent from '../../../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../../../hooks/useSetPageSpecs';
import ImoTrainingModules from '../../../../components/imoTrainingModules/ImoTrainingModules';

const IMO: NextPage = () => {
  const pageSpecs = useSetPageSpecs();

  const modulesList: string[][] = [
    [
      `Meridian serca.`,
      `Teoria 5 Faz, Prawo 5 Elementów/Żywiołów.`,
      `Prawo Matka - Syn.`,
      `Punkty pobudzające i uspokajające.`,
      `Odczytywanie pulsu.`,
    ],
    [
      `Meridian osierdzia.`,
      `Meridian płuc.`,
      `Prawo Dnia - Nocy.`,
      `Odpowiedniki pięciu elementów/żywiołów (kolor, dźwięk, emocje, zapach, etc.).`,
      `Punkty przepustowe.`,
    ],
    [
      `Meridian jelita cienkiego.`,
      `Prawo leczeni.`,
      `Przyczyny chorób.`,
      `Relacja sezonów do elementów/faz/żywiołów.`,
    ],
    [
      `Meridian potrójnego ogrzewacza.`,
      `Meridian jelita grubego.`,
      `Transfer energii.`,
      `Trzy Chou.`,
      `Punkty spotkania.`,
      `Koncept ministerstw - serce i jelito cienkie.`,
    ],
    [
      `Meridian nerek.`,
      `Energia agresywna.`,
      `Koncept ministerstw - wątroba i pęcherz.`,
      `Zaburzenie Akebane.`,
      `Meridian jelita grubego.`,
    ],
    [
      `Meridian śledziony.`,
      `Meridian wątroby.`,
      `Diagnoza brzuszna.`,
      `Koncept ministerstw - osierdzie i potrójny ogrzewacz.`,
      `Element/żywioł/faza ognia.`,
      `Punkty zgodności tylnej.`,
    ],
    [
      `Meridian pęcherza.`,
      `Prawo Męża - Żony.`,
      `Meridian pęczerza. Punkty zgodności tylnej.`,
      `Koncept ministerstw - element / żywioł / faza metalu.`,
    ],
    [
      `Meridian pęcherzyka żółciowego.`,
      `Koncept ministerstw - żołądek i śledziona.`,
      `Techniki nakłuwania: pobudzające i uspokajające.`,
      `Zastosowanie bez bliznowego przyżegania moksą.`,
      `Punkty alarmowe. Punkty zgodności przedniej.`,
      `Puls centralny - brzuszny.`,
    ],
    [
      `Punkty akupunktury - barkowe.`,
      `Głęboki kanał meridianu serca.`,
      `Głęboki kanał meridainu jelita cienkiego.`,
      `Okna Nieba.`,
      `Opętanie - zabieg smoka.`,
    ],
    [
      `Punkty akupunktury - brzuszne.`,
      `Głęboki kanał meridianu pęcherza.`,
      `Głęboki kanał meridianu nerek.`,
      `Technika 4 igieł.`,
      `Tętnicze ciśnienie krwi.`,
    ],
    [
      `Punkty akupunktury środkowej części brzucha.`,
      `Środki bezpieczeństwa. Czystość igieł.`,
      `Osoby, którym można odmówić sesji akupunktury.`,
      `Meridian głównego regulatora przedniego i tylnego.`,
      `Głęboki kanał meridianu osierdzia.`,
      `Głęboki kanał meridianu potrójnego ogrzewacza.`,
      `Punkty akupunktury klatki piersiowej.`,
    ],
    [
      `Diagnoza wg Tradycyjnej Medycyny Chińskiej (TCM).`,
      `Omdlenie pacjenta.`,
      `Punkty pierwszej pomocy.`,
      `Lista kontrolna dla diagnozy wg TCM.`,
      `Głęboki kanał meridianu pęcherzyka żółciowego i wątroby.`,
    ],
    [
      `Diagnoza wg TCM. Jak zadawać pytania?`,
      `Diagnoza wg TCM. Jak patrzeć?`,
      `Diagnoza wg TCM. Jak słuchać?`,
      `Zasady nakłuwania.`,
      `Głęboki kanał śledziony i żołądka.`,
    ],
    [
      `Porównanie żywiołów Metalu i Ognia.`,
      `Energetyczne blokady.`,
      `Planowanie sesji akupunktury.`,
      `Żywioł ognia.`,
      `Żywioł ziemi.`,
      `Głęboki kanał meridianu jelita grubego i płuc.`,
    ],
    [
      `Żywioł metalu.`,
      `Żywioł wody.`,
      `Żywioł drewna.`,
      `Analiza informacji zebranej podczas oględzin pacjenta.`,
      `Analiza snów wg TCM.`,
      `Oceany i morza energetyczne.`,
    ],
  ];

  return (
    <>
      <HeadSet
        title={pageSpecs.title}
        keywords={pageSpecs.keywords}
        desc={pageSpecs.description}
      />
      <main id='main' className='main-yellow'>
        <ImoHeader />
        <MainNav />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container imo-container'>
            <h1>KURS TRADYCYJNEJ MEDYCYNY CHIŃSKIEJ</h1>
            <p className='align-left'>Szanowni Państwo!</p>
            <p className='align-left'>
              Mam wielką przyjemność zaprezentować Państwu zarys tematyczny
              monumentalnego kursu w zakresie Tradycyjnej Chińskiej Medycyny
              (TMC).
            </p>
            <p className='align-left'>
              Kurs TMC składa się z 80 modułów o różnej tematyce dotyczącej TMC.
              Został on podzielony na pięć części:
            </p>
            <ul>
              <li className='sector'>
                <h4>Część pierwsza</h4>
                <p className='description'>
                  jest dostępnym wprowadzeniem dla mentalności Europejczyka w
                  filozofię i praktykę TMC, w szczególności akupunktury.
                </p>
                <button>Rozwiń</button>
                <div className='modules'>
                  <ul>
                    {modulesList.map((item, index) => {
                      return (
                        <ImoTrainingModules
                          key={`${item}modulelists`}
                          contentList={modulesList[index]}
                          number={index + 1}
                        />
                      );
                    })}
                  </ul>
                </div>
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

export default IMO;
