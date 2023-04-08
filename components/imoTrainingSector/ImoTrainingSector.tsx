import React, { useState } from 'react';
import ImoTrainingModules from '../../components/imoTrainingModules/ImoTrainingModules';
import trainingModulesList from '../../utils/trainingModulesList';
import TrainingModules from '../../interfaces/trainingModules';

interface Props {
  sector: TrainingModules;
  sectorIdx: number;
  totalModulesListLength: number;
}

const ImoTrainingSector = ({
  sector,
  sectorIdx,
  totalModulesListLength,
}: Props) => {
  const [show, setShow] = useState(false);

  let prevAmount = 0;
  let totalAmount = 0;

  return (
    <>
      <li key={`${sector.part}sectorlist`} className='sector'>
        <h4>Część {sector.part}</h4>
        <p className='description'>{sector.desc}</p>
        <button onClick={() => setShow(!show)}>
          {show ? `Zwiń` : `Rozwiń`}
        </button>
        {show && (
          <div className='modules'>
            <ul>
              {sector.modules.map((module, moduleIdx) => {
                let modNum = moduleIdx + 1;
                totalAmount += prevAmount;
                if (trainingModulesList[sectorIdx - 1]) {
                  modNum = totalModulesListLength + moduleIdx + totalAmount + 1;
                }
                prevAmount = 0;
                if (module.amount) {
                  prevAmount = module.amount;
                }
                return (
                  <ImoTrainingModules
                    key={`${module}modulelists${moduleIdx}`}
                    contentList={sector.modules[moduleIdx].list}
                    number={modNum}
                    amount={module.amount}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </li>
    </>
  );
};

export default ImoTrainingSector;
