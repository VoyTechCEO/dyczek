import Footer from '../../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../../components/headSet/HeadSet';
import MainNav from '../../../../components/mainNav/MainNav';
import StandardMainContent from '../../../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../../../hooks/useSetPageSpecs';
import ImoTrainingSector from '../../../../components/imoTrainingSector/ImoTrainingSector';
import trainingModulesList from '../../../../utils/trainingModulesList';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {
  locale: string;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main', 'imoMain'])),
    },
  };
}

const IMO: NextPage = () => {
  const pageSpecs = useSetPageSpecs();

  let totalModulesListLength = 0;

  return (
    <>
      <HeadSet />
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
              {trainingModulesList.map((sector, sectorIdx) => {
                if (trainingModulesList[sectorIdx - 1]) {
                  totalModulesListLength +=
                    trainingModulesList[sectorIdx - 1].modules.length;
                }

                return (
                  <ImoTrainingSector
                    sector={sector}
                    sectorIdx={sectorIdx}
                    totalModulesListLength={totalModulesListLength}
                  />
                );
              })}
            </ul>
            <p className='align-left'>
              Zajęcia będą prowadzone w języku polskim, przez autora kursu, oraz
              inne osoby z wieloletnim doświadczeniem w TMC.
            </p>
            <h4>Kurs ten jest otwarty dla wszystkich zainteresowanych.</h4>
            <p className='align-left'>
              Osoby, które będą chciały pracować z TMC, będą zobowiązane po
              każdym module napisać pracę domową, która będzie oceniana i
              wymagane jest jej zaliczenie. Poza tym osoby te, będą zobowiązane
              podejść do egzaminów praktycznych z lokalizacji punktów
              akupunktury, oraz teoretycznych z materiału przedstawionego na
              modułach. Zaliczenie tych egzaminów jest niezbędne do rozpoczęcia
              zajęć klinicznych. <br />
              Po ukończeniu zajęć klinicznych studenci będą posiadali
              wystarczającą wiedze, aby rozpocząć samodzielną praktykę
              akupunktury. Moduły od 25 w górę są opcjonalne. <br />
              Osoby, które chcą tylko pogłębić swoją wiedze z zakresu TMC nie
              muszą zaliczać egzaminów i prac domowych. Nie mogą jednak one brać
              udziału w zajęciach klinicznych.
            </p>
            <p className='align-left'>
              Moduły będą się odbywały w cyklu dwudniowym w odstępach
              miesięcznych. W roku kalendarzowym będzie miało miejsce dziesięć
              spotkań dwudniowych. Koszt jednego spotkania 550 zł (bez kosztów
              zakwaterowania). Opłaty za sprawdzanie zadania domowego i opłaty
              egzaminacyjne zostaną podane w terminie późniejszym. Kurs się
              rozpocznie po skompletowaniu grupy liczącej 40 osób.
            </p>
            <p>
              Zainteresowanych proszę o kontakt z autorem kursu: <br />
              <br />
              Henryk Dyczek <br />
              henryk.dyczek@man.torun.pl <br />
              tel: (056) 6789 343
            </p>
            <h4>grudzień, 2004</h4>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={pageSpecs.sinceYear} />
      </main>
    </>
  );
};

export default IMO;
