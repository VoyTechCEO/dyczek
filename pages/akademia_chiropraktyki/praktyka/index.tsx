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

interface Instruction {
  name: string;
  desc: string | JSX.Element;
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main'])),
    },
  };
}

const Akademia: NextPage = () => {
  const basicsList: Instruction[] = [
    {
      name: `Choroba może być wynikiem rozstroju układu nerwowego`,
      desc: `Istnieje wiele przyczyn choroby, jednakże rozstrojenia w układzie nerwowym są najistotniejszą przyczyną etiologii choroby. Układ nerwowy koordynuje aktywność komórkową dla jej adaptacji środowiskowej. Czynniki i stany, które oddziałują na układ nerwowy, a do których organizm nie jest się w stanie zaadoptować, powodują zmiany we wzorze przekazywania impulsów nerwowych, które odbiegają od normy. W konsekwencji czego wiele zaburzeń funkcyjnych układu nerwowego może doprowadzić do powstania choroby.`,
    },
    {
      name: `Rozstrojenia układu nerwowego mogą być spowodowane zaburzeniami w układzie ruchowym`,
      desc: `Zaburzenia w równowadze segmentów kręgosłupa, miednicy i kości czaszki u człowieka są często spotykane w praktyce klinicznej. Przedłużone, nienaturalne zaangażowanie układu nerwowego może być wynikiem zaburzenia, napięć i stresu układu ruchowego, spowodowanym dążeniem człowieka do postawy pionowej. Uszkodzenia mechaniczne albo podwichnięcia segmentów kręgosłupa są często powodowane poprzez niesymetryczne obciążenia grawitacyjne układu ruchowego oraz pojawienie się defektów rozwojowych, czy też podrażnień: mechanicznych, termicznych oraz psychicznych układu nerwowego.`,
    },
    {
      name: `Rozstrojenie układu nerwowego może spowodować lub pogorszyć chorobę, oraz spowodować zaburzenia w funkcjonowaniu organizmu człowieka`,
      desc: `Zaburzenia w równowadze segmentów kręgosłupa, miednicy i kości czaszki mogą mieć związek z pospolitymi dolegliwościami człowieka o pochodzeniu organicznym, trzewnym oraz naczynioruchowym. W przypadku zaistnienia stosownych okoliczności, prawie każdy element układu nerwowego może bezpośrednio, czy też pośrednio spowodować reakcje w innych elementach układu nerwowego. Razem wzięte, niezależne od siebie przyczyny nieprawidłowego funkcjonowania organizmu mogą mieć bardziej osłabiający efekt, niż pojedyncze. Zaburzenia w naturalnej równowadze segmentów kręgosłupa, miednicy i czaszki mogą zapoczątkować, czy też zaostrzyć rozstrój stabilności nerwowo-naczyniowej i nerwowo-trzewnej. Dlatego tez korekcja zaburzeń równowagi układu ruchowego jest bezwzględnie konieczna dla efektywnego prowadzenia pacjenta.`,
    },
  ];

  const methodsList: Instruction[] = [
    {
      name: `Mobilizacja struktur stawowych`,
      desc: (
        <>
          Jest to najbardziej charakterystyczny aspekt pracy opieki
          chiropraktycznej. Jej celem jest normalizacja nienaturalnych zaburzeń
          układu ruchowego, aby uwolnić powstałe w związku z tym stany napięcia
          układu ruchowego oraz wyeliminować zaburzenia pochodzenia naczyniowego
          i nerwowego. Główną metodą pracy chiropraktycznej nauczanej w Akademii
          Chiropraktyki jest metoda McTimoney- Corley'a, ze względu na jej{' '}
          <Link href='#holistyka'>holistyczność*</Link>, efektywność,
          bezpieczeństwo i miękkość.
        </>
      ),
    },
    {
      name: `Konsultacja dietetyczna`,
      desc: `Optymalna dieta jest podstawą prawidłowej pracy układu ruchowego i nerwowego.`,
    },
    {
      name: `Fizjoterapia`,
      desc: `jest często wprowadzana do opieki chiropraktycznej w celu zwiększenia efektu terapeutycznego.`,
    },
    {
      name: `Zalecenia dotyczące zachowań`,
      desc: `są niezbędnym elementem opieki chiropraktycznej. Postawa naszego ciała, sposób w jaki siedzimy, chodzimy, ćwiczymy nasze ciało, podchodzimy do problemów codziennego życia ma bezpośredni wpływ na stan naszego organizmu.`,
    },
  ];

  const medHolList: JSX.Element[] = [
    <>
      <p>Wielopoziomowość egzystencji:</p>
      <ul>
        <li>FIZYCZNA</li>
        <li>UMYSŁOWA</li>
        <li>EMOCJONALNA</li>
        <li>DUCHOWA</li>
      </ul>
    </>,
    <>
      <p>
        Ciało ludzkie posiada naturalne właściwości leczenia i regulacji samego
        siebie oraz winno pozostawać w stanie homeostazy.
      </p>
    </>,
    <>
      <p>
        Każdy pacjent jest niepowtarzalną i szczególną osobą. Choroby maja
        podobne objawy, ale osoby na nie chorujące są różne. Istotna jest
        współpraca ze strony pacjenta i udział jego odpowiedzialności w procesie
        leczenia.
      </p>
    </>,
  ];

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container practice`}>
            <img
              src='/img/chiropraktyka6.png'
              alt='Nauka w Akademii'
              className='view'
            />
            <h1>Podstawowe zasady praktyki.</h1>
            <p>
              Chiropraktyka opiera się na trzech spokrewnionych ze sobą oraz
              naukowo i klinicznie udowodnionych teoriach, które są akceptowane
              w środowisku naukowym.
            </p>
            <ol>
              {basicsList.map((item, index) => {
                return (
                  <li key={`${item.name}akademiaChBasic${index}`}>
                    <b>{item.name}.</b> {item.desc}
                  </li>
                );
              })}
            </ol>
            <img
              src='/img/chiropraktyka7.png'
              alt='Nauka w Akademii'
              className='view'
            />
            <h1>Metody używane w pracy chiropraktyka</h1>
            <ol>
              {methodsList.map((item, index) => {
                return (
                  <li key={`${item.name}akademiaChMethod${index}`}>
                    <b>{item.name}:</b> {item.desc}
                  </li>
                );
              })}
            </ol>
            <h1>*Medycyna holistyczna</h1>
            <p>
              Współczesna medycyna, w szczególności chirurgia, jest olśniewająca
              w leczeniu dolegliwości pojedynczych układów człowieka i doskonale
              sobie radzi z ostrymi i traumatycznymi przypadkami. Jednakże
              leczenie chorób o złożonym podłożu oraz chronicznych wymaga
              uwzględnienia aspektów socjologicznych, emocjonalnych i
              psychologicznych. W takim przypadku medycyna holistyczna jest
              bardzo przydatna. Bierze ona pod uwagę szeroki wachlarz wymagań
              pacjenta. Czas, cierpliwość i zrozumienie są niezbędnymi
              narzędziami terapeuty.
            </p>
            <h1>
              Medycyna holistyczna wg Hertha Larive oparta jest na czterech
              zasadach:
            </h1>
            <ol>
              {medHolList.map((item, index) => {
                return <li key={`${item}akademiaChMedHol${index}`}>{item}</li>;
              })}
            </ol>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
