import Footer from '../../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../../components/headSet/HeadSet';
import MainNav from '../../../components/mainNav/MainNav';
import StandardMainContent from '../../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../../hooks/useSetPageSpecs';
import Link from 'next/link';

interface Publics {
  header: string;
  author: string;
  short: JSX.Element;
  doc: string;
  english?: boolean;
}

const IMO: NextPage = () => {
  const pageSpecs = useSetPageSpecs();

  const publicsList: Publics[] = [
    {
      header: `Podstawy i zasady leczenia akupunkturą dolegliwości
            kręgosłupa w sytuacji, gdy terapia manualna nie przynosi
            trwałych efektów.`,
      author: `Henryk Dyczek`,
      short: (
        <p className='align-left'>
          This is the presentation of a study case of an anorexic female, who
          has commenced the acupuncture treatment for anorexia nervosa five
          years ago at the age of 23. Currently she is holding a university post
          as a lecturer and writes her PhD dissertation. She lives normal live
          both professionally and personally fulfilling. At the age of 17, the
          patient was diagnosed with anorexia nervosa. Within one year she lost
          20 kilograms. When she arrived for treatment she was 23 years old and
          she suffered from: severe depression (at the time treated with
          Prozac), drilling stomach pain, which did not react to any medication,
          had duodenal ulcers, was consumed by stress, suffered from hypothermia
          & was totally exhausted. The patient's mother has also been treated by
          the same acupuncture practitioner, though with a lesser frequency.
          That coincidence gave the practitioner a valuable insight into a
          possible eitiology of the daughter's illness. The study not only
          describes the treatment procedures which were used during the patient'
          recovery period, but also attempts to analyse and draw conclusion from
          the mother-daughter relationship in the light of the Mother-Child Law
          of the Five Phase Cycle. (201 words).
        </p>
      ),
      doc: `pub001.doc`,
    },
    {
      header: `Anoreksja, przypadek relacji matka-córka w świetle prawa 5 elementów.`,
      author: `Henryk Dyczek`,
      short: (
        <>
          <p className='align-left'>
            This is the presentation of a study case of an anorexic female, who
            has commenced the acupuncture treatment for anorexia nervosa five
            years ago at the age of 23. Currently she is holding a university
            post as a lecturer and writes her PhD dissertation. She lives normal
            live both professionally and personally fulfilling. At the age of
            17, the patient was diagnosed with anorexia nervosa. Within one year
            she lost 20 kilograms. When she arrived for treatment she was 23
            years old and she suffered from:
          </p>
          <ul className='dashed'>
            <li>severe depression (at the time treated with Prozac),</li>
            <li>
              drilling stomach pain, which did not react to any medication,
            </li>
            <li>had duodenal ulcers,</li>
            <li>was consumed by stress,</li>
            <li>suffered from hypothermia & was totally exhausted.</li>
          </ul>
          <p className='align-left'>
            The patient's mother has also been treated by the same acupuncture
            practitioner, though with a lesser frequency. That coincidence gave
            the practitioner a valuable insight into a possible eitiology of the
            daughter's illness. The study not only describes the treatment
            procedures which were used during the patient' recovery period, but
            also attempts to analyse and draw conclusion from the
            mother-daughter relationship in the light of the Mother-Child Law of
            the Five Phase Cycle. (201 words).
          </p>
        </>
      ),
      doc: `pub002.doc`,
      english: true,
    },
    {
      header: `Bóle głowy - zaginione przyczyny.`,
      author: `Henryk Dyczek`,
      short: (
        <p className='align-left'>
          Pomysł do tej prezentacji powstał z wewnętrznej potrzeby autora
          podzielenia się wieloletnim doświadczeniem w eliminowaniu bólów głowy.
          Kompleksowe i długie procedury leczenia bólów głowy Tradycyjną
          Medycyną Chińską, nie rzadko podparte nieprzejrzystą diagnozą, mogą
          być w znacznym stopniu skrócone poprzez zastosowanie podstawowych
          technik terapii czaszkowo-krzyżowej. Prezentacja ta analizuje możliwe
          przyczyny bólów głowy i poszukuje prostych rozwiązań ich eliminacji.
        </p>
      ),
      doc: `pub003.pps`,
      english: true,
    },
    {
      header: `Analiza procesu rozpoznania medycyny alternatywnej przez medycynę konwencjonalną w okresie 1965 - sierpień 2003.`,
      author: `Henryk Dyczek`,
      short: (
        <p className='align-left'>
          Medycyna alternatywna w szczególności akupunktura, chiropraktyka i
          homeopatia została zauważona przez medycynę konwencjonalną w Europie w
          latach sześćdziesiątych ubiegłego stulecia. Sceptycyzm medycyny
          konwencjonalnej spowodował, że medycyna alternatywna nie uzyskała
          uznania na które zasługuje. Jednakże w ostatnich dwudziestu latach jej
          miejsce w podstawowej opiece medycznej uległo zasadniczej zmianie, zaś
          zapotrzebowanie na usługi medycyny alternatywnej się zwiększa.
          Prezentowana analiza dotyczy wszystkich tytułów artykułów na temat
          akupunktury, które zostały umieszczone w Medline Webside w okresie od
          1965 do sierpień 2003. Zbiór tych tytułów został podzielony na okresy
          : 1965-1974, 1975-1984, 1985-1994, 1995-2003 i porównany do British
          National Corpus z użyciem oprogramowania Wmatrix dzięki uprzejmości
          Lancaster University, Wielka Brytania, w celu uzyskania częstotliwości
          pojawiania się w analizowanych tekstach słów i semantycznych pojęć
          istotnych dla przeprowadzonej analizy. Wyniki przeprowadzonej analizy
          demonstrują w jaki sposób medycyna alternatywna uzyskiwała uznanie
          medycyny konwencjonalnej, oraz demonstrują jak trudny był to dla niej
          okres. Co więcej, przeprowadzona analiza pokazuje, że w latach 60-tych
          ubiegłego stulecia medycyna alternatywna była podejrzewana o
          kuglarstwo, a mówienie o niej budziło niesmak wśród słuchających.
          Sytuacja ta uległa jednak diametralnej końcem lat 90-tych ubiegłego
          stulecia.
        </p>
      ),
      doc: `pub004.pps`,
      english: true,
    },
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
            <h1>Publikacje</h1>
            <h2>2004</h2>
            <ul>
              {publicsList.map((item) => {
                return (
                  <li key={`${item}publics`} className='post'>
                    <p className='align-left'>
                      <span>{item.header}</span>
                    </p>
                    <h4>Autor:</h4>
                    <p className='align-left'>{item.author}</p>
                    <h4>Streszczenie:</h4>
                    <div>{item.short}</div>
                    <Link href={`/docs/imo/${item.doc}`}>
                      Pobierz pełen dokument ({item.doc})
                      {item.english ? ` - po angielsku` : ``}
                    </Link>
                    <div className='line' />
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

export default IMO;
