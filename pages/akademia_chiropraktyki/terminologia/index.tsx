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

interface Explanation {
  name: string;
  desc: string;
  ext?: string[];
}

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['main'])),
    },
  };
}

const Akademia: NextPage = () => {
  const explanationsList: Explanation[] = [
    {
      name: `formą opieki zdrowotnej`,
      desc: `która wykorzystuje wrodzone i naturalne możliwości organizmu do regeneracji, czyli powrotu do zdrowia i opiera się na dwóch przesłankach:`,
      ext: [
        `związek pomiędzy strukturą i funkcjonowaniem ciała człowieka odgrywa zasadniczą rolę w utrzymaniu dobrego zdrowia`,
        `zaburzenie równowagi pomiędzy kręgosłupem i układem nerwowym przyczynia się do procesu powstawania choroby`,
      ],
    },
    {
      name: `nauką medyczną`,
      desc: `która kładzie nacisk na potrzebę utrzymywania strukturalnej spójności organizmu.`,
    },
    {
      name: `metodą pracy`,
      desc: `która delikatnymi mobilizacjami na kościach: głowy, kręgosłupa, miednicy oraz kończyn górnych i dolnych wspomaga prawidłowe funkcje układów: nerwowego i hormonalnego kontrolujących naturalne możliwości regeneracji organizmu`,
    },
    {
      name: `metodą pracy`,
      desc: `która nie stosuje farmaceutyków ani zabiegów chirurgicznych.`,
    },
  ];

  return (
    <>
      <HeadSet />
      <main id='main'>
        <AkademiaHeader />
        <MainNav />
        <AkademiaTrainings />
        <StandardMainContent>
          <article className={`container akademiaCh-container terms`}>
            <img
              src='/img/chiropraktyka4.png'
              alt='Nauka w Akademii'
              className='view'
            />
            <p>
              <b>Chiropraktyka</b> jest:
            </p>
            <ul className='explanation'>
              {explanationsList.map((item, index) => {
                return (
                  <li key={`${item.desc}akademiaChExpl${index}`}>
                    ... <b>{item.name}</b>, {item.desc}
                    {item.ext && (
                      <ul>
                        {item.ext.map((extItem, extIndex) => {
                          return (
                            <li key={`${extItem}akademiaChExts${extIndex}`}>
                              {extItem}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <p>
              Słowo <b>"chiropraktyka"</b> jest nazwą zawodu medycznego. Geneza
              słowa "chiropraktyka" wywodzi się z języka greckiego, w którym to
              C H E I R znaczy ręka, a P R A C T I C O S znaczy robione.
            </p>
            <p>
              <b>"Chiropraktyk"</b> jest osobą ze stosownym wykształceniem
              medycznym i chiropraktycznym, który poświęca szczególną uwagę
              biomechanice kręgosłupa, układowi ruchowemu, nerwowemu i
              naczyniowemu oraz zwraca uwagę na sposób odżywiania się.
            </p>
          </article>
        </StandardMainContent>
        <Footer />
      </main>
    </>
  );
};

export default Akademia;
