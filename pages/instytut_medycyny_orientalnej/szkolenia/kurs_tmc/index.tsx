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
import trainingModulesList from '../../../../utils/trainingModulesList';

const IMO: NextPage = () => {
  const pageSpecs = useSetPageSpecs();

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
              {trainingModulesList.map((sector, sectorIdx) => {
                return (
                  <li key={`${sector.part}sectorlist`} className='sector'>
                    <h4>Część {sector.part}</h4>
                    <p className='description'>{sector.desc}</p>
                    <button>Rozwiń</button>
                    <div className='modules'>
                      <ul>
                        {sector.list.map((module, moduleIdx) => {
                          let modNum: number;
                          if (!trainingModulesList[sectorIdx - 1]) {
                            modNum = moduleIdx + 1;
                          } else {
                            modNum =
                              trainingModulesList[sectorIdx - 1].list.length +
                              moduleIdx +
                              1;
                          }

                          return (
                            <ImoTrainingModules
                              key={`${module}modulelists`}
                              contentList={sector.list[moduleIdx]}
                              number={modNum}
                            />
                          );
                        })}
                      </ul>
                    </div>
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
