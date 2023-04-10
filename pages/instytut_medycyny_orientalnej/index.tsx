import Footer from '../../components/footer/Footer';
import { NextPage } from 'next';
import React from 'react';
import HeadSet from '../../components/headSet/HeadSet';
import MainNav from '../../components/mainNav/MainNav';
import StandardMainContent from '../../components/standardMainContent/StandardMainContent';
import ImoHeader from '../../components/imoHeader/ImoHeader';
import SmallerInfo from '../../components/smallerInfo/SmallerInfo';
import useSetPageSpecs from '../../hooks/useSetPageSpecs';
import LangChangeBtn from '../../components/langChangeBtn/LangChangeBtn';

interface Props {
  locale: string;
}

export function getStaticProps({ locale }: Props) {
  return {
    props: {
      locale,
    },
  };
}

const IMO: NextPage<Props> = (props) => {
  const pageSpecs = useSetPageSpecs();

  console.log(props.locale);

  return (
    <>
      <HeadSet
        title='Instytut Medycyny Orientalnej'
        keywords='instytut medycyny orientalnej, imo, medycyna orientalna, henryk dyczek'
      />
      <main id='main' className='main-yellow'>
        <ImoHeader />
        <MainNav />
        <LangChangeBtn />
        <StandardMainContent subNavItems={pageSpecs.subNavContent}>
          <article className='container imo-container'>
            <h1>Nasze cele</h1>
            <ul className='dashed'>
              <li>Propagowanie dziedzictwa nauki i sztuki orientalnej.</li>
              <li>
                Organizowanie szkoleń w zakresie nauki i sztuki orientalnej.
              </li>
              <li>
                Tworzenie forum dla wymiany doświadczeń i zdobyczy naukowych.
              </li>
            </ul>
            <h1>Nasza misja</h1>
            <p>
              Instytut Medycyny Orientalnej powstał dla stworzenia wiarygodnego
              źródła informacji dotyczącej nauki i sztuki Dalekiego Wschodu.
              <br />
              <br />
              Koncept Instytutu powstał podczas różnego rodzaju spotkań i
              dyskusji oraz pracy z chorymi w moim gabinecie w okresie ostatnich
              20 lat. Osoby z którymi rozmawiałem, jak i chorzy, którzy po
              leczeniu <span>Tradycyjną Medycyną Chińską</span> nie kryli
              zachwytu filozofią i mądrością tego sprawdzonego czasem systemu.
              Stworzenie Instytutu jest próbą wyjścia na przeciw życzeniom
              chcących poszerzyć swoją wiedzę związaną z tym tematem, jak i osób
              zainteresowanych skorzystaniem z wiedzy i doświadczenia innych.
              <br />
              <br />
              Jestem głęboko przekonany, że nauka i sztuka są ze sobą powiązane
              jak <span>Yin i Yang</span>. Dlatego też poznawanie jednej bez
              uwzględnienia drugiej prowadzi do zubożenia wiedzy, a brak
              uwzględnienia kontekstu kulturowego, w którym powstawały jest
              źródłem wielu nieporozumień.
              <br />
              <br />
              Instytut zaprasza tych wszystkich, którzy chcieliby swoją wiedzą i
              doświadczeniem wzbogacić wiarygodność osiągnięć naukowych i
              kulturowych Dalekiego Wschodu, jak i osoby pragnące podzielić się
              twórczą krytyką dotyczącą informacji zawartych na stronach
              Instytutu.
            </p>
            <h1>Henryk Dyczek</h1>
            <p>Listopad, 2004</p>
          </article>
        </StandardMainContent>
        <SmallerInfo />
        <Footer sinceYear={1999} />
      </main>
    </>
  );
};

export default IMO;
