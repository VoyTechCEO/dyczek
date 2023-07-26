import React from 'react';

interface Props {
  contentList: string[] | JSX.Element[];
  number: number;
  amount?: number;
}

const ImoTrainingModules = ({ contentList, number, amount }: Props) => {
  return (
    <>
      <li>
        <h4>Moduł {amount ? `${number} - ${number + amount}` : number}</h4>
        <ul>
          {contentList.map((item, index) => {
            return <li key={`${item}trainingmodules${index}`}>{item}</li>;
          })}
        </ul>
      </li>
    </>
  );
};

export default ImoTrainingModules;
