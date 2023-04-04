import React from 'react';

interface Props {
  contentList: string[];
  number: number;
  amount?: number;
}

const ImoTrainingModules = ({ contentList, number, amount }: Props) => {
  return (
    <>
      <li>
        <h4>Moduł {amount ? `${number} - ${number + amount}` : number}</h4>
        <ul>
          {contentList.map((item) => {
            return <li key={`${item}trainingmodules`}>{item}</li>;
          })}
        </ul>
      </li>
    </>
  );
};

export default ImoTrainingModules;
