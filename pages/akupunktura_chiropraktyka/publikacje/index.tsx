import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import AkuChiHeader from '../../../components/akuChiHeader/AkuChiHeader';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props {
  locale: string;
}

interface Publication {
  year: number;
  text: JSX.Element;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main'])),
    },
  };
}

const AkuChi: NextPage = () => {
  const publicationsList: Publication[] = [
    {
      year: 2017,
      text: (
        <>
          <i>Punkty Akupunktury - Jelito Grube i Płuca</i> - monografia, s.275.
        </>
      ),
    },
    {
      year: 2014,
      text: (
        <>
          Wielka Fizjoterapia, red. Z. Śliwiński, A. Sieroń, cz. Chiropraktyka,
          Elsevier Urban &amp; Partner, Wrocław.
        </>
      ),
    },
    {
      year: 2014,
      text: (
        <>
          Podpułkownik, profesor medycyny, Antoni Tomasz Aleksander Jurasz
          (1882-1961) – chirurg, naukowiec, społecznik, patriota, część I, II i
          III, Lek. Wojsk., 2014; 92(3):1-3.
        </>
      ),
    },
    {
      year: 2014,
      text: (
        <>
          1 autor, <i>Anatomiczna Lokalizacja Punktów Akupunktury</i> –
          monografia, s. 925.
        </>
      ),
    },
    {
      year: 2013,
      text: (
        <>
          <i>Antoni Tomasz Aleksander Jurasz (1882-1961)</i> – monografia.
          Przysiek, s. 295.
        </>
      ),
    },
    {
      year: 2010,
      text: (
        <>
          1 autor. ‘Analiza skuteczności leczenia technikami terapii manualnej
          wg McTimoney- Corleya (MTC) u pacjentów z zespołem bólowym dolnego
          odcinka kręgosłupa.’ <i>Kwartalnik Ortopedyczny</i>. Nr 4. 2010. Z.
          80, s. 504-512.
        </>
      ),
    },
    {
      year: 2010,
      text: (
        <>
          1 autor. ‘Hypolordoza szyjna leczona chiropraktyką.’{' '}
          <i>Kwartalnik Ortopedyczny</i>. Nr 4. 2010. Z. 80, s. 513-523.
        </>
      ),
    },
    {
      year: 2009,
      text: (
        <>
          ‘Rehabilitacja koni’. <i>Konie i Rumaki</i>, Nr 9(353) wrzesień 2009,
          s. 69-71.
        </>
      ),
    },
    {
      year: 2009,
      text: (
        <>
          ‘Rehabilitacja kończyn oraz grzbietu u koni z zastosowaniem
          specjalistycznych magnesów’. <i>Konie i Rumaki</i>, Nr 8(352) sierpień
          2009, s. 26-28.
        </>
      ),
    },
    {
      year: 2009,
      text: (
        <>
          ‘The development of Alternative Medicine from 1965 to 2000: a keyword
          &amp; key-concept approach.” VDM Publishing House Ltd, 2009.
        </>
      ),
    },
    {
      year: 2008,
      text: (
        <>
          Pani Helu. Już nie boli. Już nie piecze! (Hemoroidy – leczenie
          niekowencjonalne)”, <i>Zwierciadło Medycyny</i>, Nr 1-2(11-12), 2008,
          s. 77-92.
        </>
      ),
    },
    {
      year: 2005,
      text: (
        <>
          ‘Trzymaj się prosto’, <i>Zwierciadło Medycyny</i>, Nr 2-3(6-7), 2005,
          s. 93-100.
        </>
      ),
    },
    {
      year: 2004,
      text: (
        <>
          ‘Ulecz matkę, a dziecko będzie zdrowe’ <i>Zwierciadło Medycyny</i>, Nr
          4 (1), 2004, s. 69-71.
        </>
      ),
    },
    {
      year: 1999,
      text: (
        <>
          ‘Efektywne i delikatne metody chiropraktyczne w leczeniu dolegliwości
          kręgosłupa, których podłożem są podwichnięcia kręgów’.{' '}
          <i>Medycyna manualna</i>. T. III. NR 1 i 2., 199, s. 23-26.
        </>
      ),
    },
    {
      year: 1998,
      text: (
        <>
          ‘Podstawy i zasady leczenia akupunkturą dolegliwości kręgosłupa w
          sytuacji kiedy terapia manualna nie przynosi trwałych efektów.’{' '}
          <i>Medycyna manualna</i>. T. II. NR 4, 1998, s. 23-26.
        </>
      ),
    },
    {
      year: 1995,
      text: (
        <>
          ‘Tinnitus and Chiropractic – experimental study’.{' '}
          <i>International Journal of Alternative and Complementary Medicine</i>
          , 1995.
        </>
      ),
    },
  ];

  const inDevelopmentList: JSX.Element[] = [
    <>
      <i>Punkty Akupunktury – Żołądek i Śledziona</i> - monografia, s. 421.
    </>,
    <>
      <i>Punkty Akupunktury – Serce i jelito Cienkie</i> - monografia.
    </>,
    <>
      <i>Punkty Akupunktury – Osierdzie i Potrójny Ogrzewacz</i> - monografia.
    </>,
    <>
      <i>Punkty Akupunktury – Pęcherzyk Żółciowy i Wątroba</i> - monografia.
    </>,
    <>
      <i>Punkty Akupunktury – Pęcherz Moczowy i Nerki</i> - monografia.
    </>,
    <>
      <i>Punkty Akupunktury – Kanał Poczęcia i Zarządzający</i> - monografia.
    </>,
    <>Chiropraktyka.</>,
    <>
      <i>Chiropraktyka McTimoney – Corleya.</i>
    </>,
    <>
      <i>Chiropraktyka Pierce’a.</i>
    </>,
    <>
      <i>Akupunktura pięcioelementowa – lekarstwo dla somy, psyche i pneuma.</i>
    </>,
  ];

  return (
    <>
      <HeadSet />
      <main id='main' className='main-blue'>
        <AkuChiHeader />
        <MainNav />
        <StandardMainContent>
          <article className={`container akuChiro-container publics`}>
            <h1>PUBLIKACJE</h1>
            <ul className='publications'>
              {publicationsList.map((item, index) => {
                return (
                  <li key={`${item.text}akuChiroPublics${index}`}>
                    <h4>{item.year}</h4>
                    <p>{item.text}</p>
                  </li>
                );
              })}
            </ul>
            <h1>W OPRACOWANIU</h1>
            <ul className='dev'>
              {inDevelopmentList.map((item, index) => {
                return (
                  <li key={`${item}akuChiroInDev${index}`}>
                    <p>{item}</p>
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

export default AkuChi;
